const express = require('express')
const users = express.Router()
const cors = require('cors')

const models = require('../db/models/index')
users.use(cors())

users.get("/", async (req, res) => {
    try {
        const userList = await models.user.findAll();
        res.status(200).json({
            msg: "All Users",
            userList
        });
    } catch (error) {
        res.status(500).send('Server Error');
    }
})

users.get("/:id/tickets", async (req, res) => {
    // try {
    //     const userList = await models.User.findAll();
    //     res.status(200).json({
    //         msg: "All Users",
    //         userList
    //     });
    // } catch (error) {
    //     res.status(500).send('Server Error');
    // }
})

users.put("/:id/tickets/:ticketNumber", async (req, res) => {
    const { user } = req.user;
    const { ticketNumber } = req.params;
    try {
        const ticket = await models.ticket.findOne({ where: { ticketNumber: ticketNumber} })
        if (!ticket) {
            return res.status(400).send(`Ce ticket n'existe pas`);
        }
        if (ticket.state == 'UNATTRIBUTED')  {
            // update ticket : state ATTRIBUTED, idUSer = user.idUser
            ticket.update({
                idUser: user.idUser,
                state: 'ATTRIBUTED'
            });
            return res.status(200).json({
                msg: 'Ticket updated',
                ticket
            })
        } else {
            // err msg ticket not available 
            return res.status(400).send(`Ce ticket est invalide`);
        }
    } catch (err) {
        return res.status(400).send(err);
    }
})


users.put("/:id", async (req, res) => {
    // Get the url param (id)
    const { id } = req.params;
    let { firstname, email, lastname, role } = req.body;

    try {
        const user = await models.user.findOne({ where: { id: id }});
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
        const user = await models.user.findOne({ where: { id: id }});
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
        const user = await models.user.findOne({ where: { id: id }});
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