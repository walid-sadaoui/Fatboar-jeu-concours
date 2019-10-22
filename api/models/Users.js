const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
    'user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: Sequelize.STRING
        },
        Last_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        created: {
            type: Sequelize.STRING
        },

    }, {
        timestamps: false
    }

)