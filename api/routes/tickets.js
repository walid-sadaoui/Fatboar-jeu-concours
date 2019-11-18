const router = require('express').Router();
const models = require("../db/models/index");
const Op = require('sequelize').Op;

const { Ticket } = models;

router.get("/", async (req, res) => {
    const { user } = req.user;
    console.log(user.role);
    if (user.role != 'ADMIN') {
        return res.status(400).send('Access denied');
    }
    try {
        const ticket = await models.ticket.findAll({ limit: 10 });
        res.status(200).json({
            msg: 'All tickets',
            ticket
        });
    } catch (error) {
        return res.status(400).send('Server Error');
    }
});

router.patch("/:ticketNumber", async (req, res) => {
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

});


router.get('/:ticketNumber', async (req, res) => {
    
});

router.delete('/:ticketNumber', async (req, res) => {
    
});

router.get('/:ticketNumber/gain', async (req, res) => {
    
});


module.exports = router;