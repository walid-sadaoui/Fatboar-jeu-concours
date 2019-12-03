'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   queryInterface.createTable("tickets", {
    idTicket: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ticketNumber: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    state: {
      type: Sequelize.ENUM,
      values: ['AVAILABLE', 'UNATTRIBUTED', 'ATTRIBUTED', 'USED'],
      defaultValue: 'AVAILABLE'
    },
    idGain: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    useDate: {
      type: Sequelize.DATE,
      defaultValue: null
    },
    winningTicket: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
   });
   const tickets = generateTickets(1000);
   return queryInterface.bulkInsert('tickets', tickets, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('tickets', null, {});
  }
};

function generateTickets(count) {
  const tickets = [];
  for (let i = 0; i < count; i++) {
    const newTicket = {
      ticketNumber: faker.helpers.replaceSymbolWithNumber("##########"),
      idGain: setIdGain(),
      state: setState()
    };
    tickets.push(newTicket);
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

function setState() {
  const number = Math.random();
  if (number > 0.2) {
    return 'AVAILABLE';
  } else {
    return 'UNATTRIBUTED';
  }
}
