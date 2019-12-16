'use strict';

const faker = require('faker');
const models = require('../models/index');

module.exports = {
  up: (queryInterface, Sequelize) => {
   return models.ticket.sync({force: true}).then(() => {
    const tickets = generateTickets(1000);
    return queryInterface.bulkInsert('tickets', tickets, {});
   })
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('tickets', null, {});
  }
};

function generateTickets(count) {
  const tickets = [];
  let ticketNumber = 1111111111;
  for (let i = 0; i < count; i++) {
    if (i > 950) {
      const newTicket = {
        ticketNumber: ticketNumber.toString(),
        idGain: setIdGain(),
        state: setState(i/count),
        idUser: 12
      };
      tickets.push(newTicket);
    } else {
      const newTicket = {
        ticketNumber: ticketNumber.toString(),
        idGain: setIdGain(),
        state: setState(i/count)
      };
      tickets.push(newTicket);
    }
    ticketNumber = ticketNumber + 1;
  }
  return tickets;
}

function setIdGain() {
  const number = Math.random();
  if (number > 0.4) {
    return 1;
  } else if (number > 0.2) {
    return 2;
  } else if (number > 0.1) {
    return 3;
  } else if (number > 0.04) {
    return 4;
  } else {
    return 5;
  }
}

function setState(number) {
  if (number < 0.2) {
    return 'AVAILABLE';
  } else {
    return 'ATTRIBUTED';
  }
}

function setUser(number) {
  if (number < 0.95) {
    return null;
  } else {
    return 12;
  }
}
