const express = require('express');
const router  = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const models = require('../db/models/index')

router.use(cors())

router.get('/', function(req, res) {
    const routeList = ` 
    ### Inscription \n
    
    creer utilisateur : POST /users, POST /auth/register \n
    
    ### Connexion token(null) \n
    
    POST /auth/login \n
    GET /users/:idUser, PATCH /users/:idUser (state) \n
    
    ### Deconnexion token(ADMIN || EMPLOYEE || CLIENT) \n
    
    POST /auth/logout \n
    GET /users/:idUser, PATCH /users/:idUser (state) \n
    
    ### Compte client : inserer ticket token(CLIENT) \n
    
    PATCH /tickets/:ticketNumber (state, idUser) \n
    
    ### Compte client : liste participations token(CLIENT) \n 
    
    GET /tickets (idUser) + filtres (ticket.state) \n
    GET /tickets/:ticketNumber (idUser) \n
    
    ### Compte client : modifier infos personnelles token(CLIENT || ADMIN) \n

    PUT /users/:idUser --> formulaire front \n
    
    ### Compte client : supprimer compte token(CLIENT || ADMIN) \n
    
    DEL /users/:idUser \n
    
    ### Compte client : supprimer ticket \n
    
    DEL /ticket/:ticketNumber \n
    
    ### Compte client : résultat concours \n
    
    GET /users/:idUser/tickets --> front winningTicket == true \n
    
    ### Compte admin : créer compte --> formulaire front avec picklist role \n
    
    POST /admin/register \n
    
    ### Compte admin : connexion \n
    
    POST /admin/login \n
    
    ### Compte admin : deconnexion \n
    
    POST /admin/logout \n
    
    ### Compte admin : liste tickets \n
    
    GET /tickets --> filtre state \n
    
    ### Compte admin : liste users \n
    
    GET /users --> filtre state, winningTicket, hasTicket \n
    
    ### Compte admin : supprimer utilisteur token(ADMIN) \n
    
    DEL /users/:idUser \n
    
    ### Compte admin : verifier gain token(ADMIN || EMPLOYEE || CLIENT) \n
    
    GET /tickets/:ticketNumber/gain \n
    
    ### Compte admin : attribuer ticket token(ADMIN || EMPLOYEE) \n
    
    PATCH /tickets/:ticketNumber --> (idUser, state: USED) \n
    
    ### Compte admin : attribuer ticket token(ADMIN || EMPLOYEE) \n
    
    PATCH /tickets/:ticketNumber --> (idUser, state: USED)`;
    res.status(200).send(routeList);
});

module.exports = router;
