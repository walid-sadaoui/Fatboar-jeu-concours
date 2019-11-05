const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const models = require('../db/models/index')
users.use(cors())

users.get("/", async (req, res) => {
    try {
        const userList = await models.User.findAll();
        res.status(200).json({
            msg: "All Users",
            userList
        });
    } catch (error) {
        res.status(500).send('Server Error');
    }
})


users.put("/:id", async (req, res) => {
    // Get the url param (id)
    const { id } = req.params;
    let { firstname, email, lastname, role } = req.body;

    try {
        const user = await models.User.findOne({ where: { id: id }});
        if(!user) return res.status(400).send("User not Found");
        user
        .update({
            firstname: firstname,
            email: email,
            lastname: lastname,
            role: role
        })
        .then(user => res.json({
            msg: "User successfully updated",
            user: user
        }))
        .catch(err => res.status(400).send(err));
    } catch (error) {
        res.status(500).send('Server Error');
    }
})

users.patch("/:id", async (req, res) => {
    // Get the url param (id)
    const { id } = req.params;

    try {
        const user = await models.User.findOne({ where: { id: id }});
        if(!user) return res.status(400).send("User not Found");
        user
        .update(req.body)
        .then(user => res.json({
            msg: "User successfully updated",
            user: user
        }))
        .catch(err => res.status(400).send(err));
    } catch (error) {
        res.status(500).send('Server Error');
    }
})

users.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try{
        const user = await models.User.findOne({ where: { id: id }});
        if(!user) return res.status(400).send("User not Found");
        user
        .destroy()
        .then(() => res.status(200).send("User successfully Deleted"))
        .catch(err => res.status(400).send(err));
    } catch(error){
        res.status(500).send('Server Error');
    }
})

module.exports = users