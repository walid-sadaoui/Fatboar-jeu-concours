'use strict';

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
   queryInterface.createTable("gains", {
    idGain: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    }
   });
   const gainsDescription = [`Une entrée ou un dessert au choix`,`Un burger au choix`,`Un menu du jour`,`Un menu au choix`,`70% de réduction`];
   const gains = generateGains(gainsDescription);
   return queryInterface.bulkInsert('gains', gains, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
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
