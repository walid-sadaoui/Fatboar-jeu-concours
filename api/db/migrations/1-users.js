'use strict';

const faker = require('faker');
const bcrypt = require('bcrypt');
const models = require('../models/index')

module.exports = {
  up: (queryInterface, Sequelize) => {
   return models.user.sync({force: true, logging: null}).then(() => {
    const users = [];
    let password = 'admin';
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    password = hash;
    const newAdmin = {
      firstName: 'Eric',
      lastName: 'Bourdon',
      email: 'eric.bourdon@fatboar.site',
      password: password,
      phone: '0612345678',
      role: 'ADMIN'
    };
    users.push(newAdmin);
    generateUsers(10, 'EMPLOYEE', users);
    password = 'client';
    const hashClient = bcrypt.hashSync(password, salt);
    password = hashClient;
    const newClient = {
      firstName: 'Mike',
      lastName: 'Ross',
      email: 'mike.ross@gmail.com',
      password: password,
      phone: '0687654321',
      role: 'CLIENT'
    };
    users.push(newClient);
    return queryInterface.bulkInsert('users', users, {});
   })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

function generateUsers(count, role, userList) {
  for (let i = 0; i < count; i++) {
    let password = faker.internet.password(10);
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    password = hash;
    const newUser = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: password,
      phone: faker.helpers.replaceSymbolWithNumber("06########"),
      role: role
    };
    userList.push(newUser);
  }
}
