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

router.put("/:ticketNumber", async (req, res) => {
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

router.get("/:code", async (req, res) => {

});


router.post('/add', async (req, res) => {
    let { code } = req.body;
    let { user } = req.user;

    try {
            const ticket = await models.Ticket.create({
                    code: code,
                    userId: user.id,
                    gainId: 1,
                    useDate: Date.now()
                });
            if(!ticket) return res.status(400).send('Ticket not created');
            res.status(200).json(ticket);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;