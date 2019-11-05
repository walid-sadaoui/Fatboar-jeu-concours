const router = require('express').Router();
const models = require("../db/models/index");
const Op = require('sequelize').Op;

const { Ticket } = models;

router.get("/all", async (req, res) => {
    let { user } = req.user;

    try {
        const ticket = await models.Ticket.findAll({ attributes: ['code'], where: { gainId: { [Op.ne]: null } }});
        res.status(200).json({
            msg: 'All tickets',
            ticket,
            email: user.email
        });
    } catch (error) {
        res.status(400).send('Server Error');
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