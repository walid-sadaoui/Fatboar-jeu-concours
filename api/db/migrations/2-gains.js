'use strict';

const models = require('../models/index');

module.exports = {
  up: (queryInterface, Sequelize) => {
   return models.gain.sync({force: true}).then(() => {
    const gainsDescription = [`Une entrée ou un dessert au choix`,`Un burger au choix`,`Un menu du jour`,`Un menu au choix`,`70% de réduction`];
    const gains = generateGains(gainsDescription);
    return queryInterface.bulkInsert('gains', gains, {});
   })
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('gains', null, {});
  }
};

function generateGains(gainsDescription) {
  const gains = [];
  for (let i = 0; i < gainsDescription.length; i++) {
    const newGain = {
      description: gainsDescription[i]
    };
    gains.push(newGain);
  }
  return gains;
}
