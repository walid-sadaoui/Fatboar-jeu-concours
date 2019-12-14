const router = require('express').Router();
const models = require("../db/models/index");
const Op = require('sequelize').Op;

const { Ticket } = models;

router.get("/", async (req, res) => {
    const { user } = req.user;
    if (user.role != 'ADMIN') {
        return res.status(403).send('Access denied');
    }
    try {
        const tickets = await models.ticket.findAll();
        res.status(200).json({
            msg: 'All tickets',
            tickets
        });
    } catch (error) {
        return res.status(500).send('Server Error');
    }
});

router.put("/:ticketNumber", async (req, res) => {
    const { user } = req.user;
    const { ticketNumber } = req.params;
    const ticketParams = req.body;
    if (user.role === 'CLIENT') {
        return res.status(403).send('Access denied');
    }
    try {
        const ticket = await models.ticket.findOne({ where: { ticketNumber: ticketNumber} })
        if (!ticket) {
            return res.status(404).send(`Ticket not found`);
        }
        if (ticket.state == 'ATTRIBUTED')  {
            ticket.update(ticketParams, {where: {
                ticketNumber: ticketNumber
            }});
            return res.status(200).json({
                msg: 'Ticket updated',
                ticket
            })
        } else {
            return res.status(422).send(`Invalid ticket`);
        }
    } catch (err) {
        return res.status(500).send(err);
    }

});


router.get('/:ticketNumber', async (req, res) => {
    const { user } = req.user;
    const { ticketNumber } = req.params;
    if (user.role === 'CLIENT') {
        return res.status(403).send('Access denied');
    }
    try {
        const ticket = await models.ticket.findOne({ where: { ticketNumber: ticketNumber } });
        if (!ticket) {
            return res.status(404).send(`Ticket not found`);
        }
        res.status(200).json({
            ticket
        });
    } catch (error) {
        return res.status(500).send('Server Error');
    }
});

router.delete('/:ticketNumber', async (req, res) => {
    const { user } = req.user;
    const { ticketNumber } = req.params;
    if (user.role != 'ADMIN') {
        return res.status(403).send('Access Denied');
    }
    try{
        const ticket = await models.ticket.findOne({ where: { ticketNumber: ticketNumber }});
        if(!ticket) return res.status(404).send("Ticket not Found");
        await models.ticket
        .destroy({
            where: {ticketNumber: ticketNumber}
        })
        .then(() => res.status(200).send("Ticket successfully Deleted"))
        .catch(err => res.status(500).send(err));
    } catch(error){
        res.status(500).send('Server Error');
    }
});

router.get('/:ticketNumber/gain', async (req, res) => {
    const { user } = req.user;
    const { ticketNumber } = req.params;
    if (user.role === 'CLIENT') {
        return res.status(403).send('Access Denied');
    }
    try{
        const ticket = await models.ticket.findOne({ where: { ticketNumber: ticketNumber }});
        if(!ticket) return res.status(404).send("Ticket not Found");
        const gain = await models.gain.findOne({
            where: {idGain: ticket.idGain}
        })
        res.status(200).json({
            gain
        });
    } catch(error){
        res.status(500).send('Server Error');
    }
});


module.exports = router;