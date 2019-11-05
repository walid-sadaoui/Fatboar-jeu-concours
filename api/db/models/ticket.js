'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('ticket', {
    idTicket: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ticketNumber: {
      type: DataTypes.INTEGER,
    },
    state: {
      type: DataTypes.ENUM,
      values: ['ASSOCIATED', 'UNATTRIBUTED', 'ATTRIBUTED', 'USED']
    }
  }, {
    timestamps: false
  });
  Ticket.associate = function(models) {
    // associations can be defined here
    // Ticket.hasMany(models.User, {
    //   as: 'users'
    // })

  };
  return Ticket;
};