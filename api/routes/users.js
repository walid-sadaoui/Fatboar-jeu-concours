const express = require('express')
const users = express.Router()
const cors = require('cors')

const models = require('../db/models/index')
users.use(cors())

users.get("/", async (req, res) => {
    const { user } = req.user;
    if (user.role === 'CLIENT') {
        return res.status(403).send('Access Denied');
    }
    try {
        const userList = await models.user.findAll();
        if (!userList) {
            return res.status(404).send(`No users found`)
        }
        res.status(200).json({
            msg: "All Users",
            userList
        });
    } catch (error) {
        res.status(500).send('Server Error');
    }
})

users.get("/:idUser", async (req, res) => {
    const { user } = req.user;
    const { idUser } = req.params;
    if (user.role === 'CLIENT' && user.idUser != idUser) {
        return res.status(403).send('Access Denied');
    }
    try {
        const user = await models.user.findOne({ where: { idUser: idUser} });
        if (!user) {
            return res.status(404).send(`User not found`);
        }
        res.status(200).json({
            user
        });
    } catch (err) {
        return res.status(500).send(err);
    }    
})

users.get("/:idUser/tickets", async (req, res) => {
    const { user } = req.user;
    const { idUser } = req.params;
    if (user.role === 'CLIENT' && user.idUser != idUser) {
        return res.status(403).send('Access Denied');
    }
    try {
        const tickets = await models.ticket.findAll({ where: { idUser: idUser} });
        if (!tickets) {
            return res.status(404).send(`No tickets found for this client`);
        }
        res.status(200).json({
            msg: `Tickets du client ${user.firstName} ${user.lastName}`,
            tickets
        });
    } catch (err) {
        return res.status(500).send(err);
    }
    
})

users.put("/:idUser/tickets/:ticketNumber", async (req, res) => {
    const { user } = req.user;
    const { ticketNumber } = req.params;
    if (user.role != 'CLIENT') {
        return res.status(403).send('Access Denied');
    }
    try {
        const ticket = await models.ticket.findOne({ where: { ticketNumber: ticketNumber} })
        if (!ticket) {
            return res.status(404).send(`Ticket not found`);
        }
        if (ticket.state == 'UNATTRIBUTED')  {
            ticket.update({
                idUser: user.idUser,
                state: 'ATTRIBUTED'
            });
            return res.status(200).json({
                msg: 'Ticket updated',
                ticket
            })
        } else {
            return res.status(422).send(`Invalid Ticket`);
        }
    } catch (err) {
        return res.status(500).send(err);
    }
})


users.put("/:idUser", async (req, res) => {
    const { user } = req.user;
    const { idUser } = req.params;
    const userUpdated = req.body;
    if (user.role === 'CLIENT' && user.idUser != idUser) {
        return res.status(403).send('Access Denied');
    }
    try {
        const user = await models.user.findOne({ where: { idUser: idUser }});
        if(!user) return res.status(404).send("User not Found");
        const [numberAffectedRows, updatedUser] = await models.user.update(userUpdated, {
            where: {idUser: idUser},
            returning: true,
            plain: true
        })
        return res.status(200).json({
        msg: "User successfully updated",
        user: updatedUser
        })
    } catch (error) {
        res.status(500).send('Server Error');
    }
})

users.patch("/:idUser", async (req, res) => {
    const { user } = req.user;
    const { idUser } = req.params;
    const userUpdated = req.body;
    if (user.role === 'CLIENT' && user.idUser != idUser) {
        return res.status(403).send('Access Denied');
    }
    try {
        const user = await models.user.findOne({ where: { idUser: idUser }});
        if(!user) return res.status(404).send("User not Found");
        const [numberAffectedRows, updatedUser] = await models.user.update(userUpdated, {
            where: {idUser: idUser},
            returning: true,
            plain: true
        })
        return res.status(200).json({
        msg: "User successfully updated",
        user: updatedUser
        })
    } catch (error) {
        res.status(500).send('Server Error');
    }
})

users.delete("/:idUser", async (req, res) => {
    const { user } = req.user;
    const { idUser } = req.params;
    if ((user.role === 'CLIENT' && user.idUser != idUser) || user.role === 'EMPLOYEE') {
        return res.status(403).send('Access Denied');
    }
    try{
        const user = await models.user.findOne({ where: { idUser: idUser }});
        console.log('DELETED USER : ' + user);
        if(!user) return res.status(404).send("User not Found");
        await models.user
        .destroy({
            where: {idUser: idUser}
        })
        .then(() => res.status(200).send("User successfully Deleted"))
        .catch(err => res.status(500).send(err));
    } catch(error){
        res.status(500).send('Server Error');
    }
})

module.exports = users