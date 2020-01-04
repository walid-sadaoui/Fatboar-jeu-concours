'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('ticket', {
    idTicket: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ticketNumber: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    state: {
      type: DataTypes.ENUM,
      values: ['AVAILABLE', 'ATTRIBUTED', 'ASSOCIATED', 'USED'],
      defaultValue: 'AVAILABLE'
    },
    idGain: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    useDate: {
      type: DataTypes.DATE,
      defaultValue: null
    },
    winningTicket: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    timestamps: false
  });
  Ticket.associate = function(models) {
    //associations can be defined here
    Ticket.belongsTo(models.user, {
      foreignKey: {
        fieldName: 'idUser',
        allowNull: true
      },
      // targetKey: 'idUser'
    })
    
    Ticket.belongsTo(models.gain, {
      foreignKey: {
        fieldName: 'idGain',
        allowNull: false
      },
      targetKey: 'idGain'
    })

  };
  return Ticket;
};