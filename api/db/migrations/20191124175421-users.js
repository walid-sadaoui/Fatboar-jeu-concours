'use strict';

const faker = require('faker');
const bcrypt = require('bcrypt');

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
   queryInterface.createTable("users", {
    idUser: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false // 1 chiffre, 1 minusule, 1 majuscule, 8 caractères
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false, // check format mail
      validate: {
        isEmail: true,
      }
    },
    phone: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    role: {
      type: Sequelize.ENUM,
      values: ['CLIENT', 'EMPLOYEE', 'ADMIN'],
      defaultValue: 'CLIENT',
      allowNull: false
    },
    state: {
      type: Sequelize.ENUM,
      values: ['ONLINE', 'OFFLINE'],
      defaultValue: 'OFFLINE',
      allowNull: false
    }
   });
   const users = [];
   let password = 'fatroot';
   const saltRounds = 10;
   const salt = bcrypt.genSaltSync(saltRounds);
   const hash = bcrypt.hashSync(password, salt);
   password = hash;
   console.log(password);
   const newAdmin = {
     firstName: 'Eric',
     lastName: 'Bourdon',
     email: 'eric.bourdon@fatboar.site',
     password: password,
     phone: '0612345678',
     role: 'ADMIN',
     state: 'OFFLINE'
   };
   users.push(newAdmin);
   generateUsers(100, 'EMPLOYEE', users);
  //  generateUsers(1000, 'CLIENT', users);
   // users.concat(employees);
   // console.log(employees);
   // users.concat(clients);
   return queryInterface.bulkInsert('users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('users', null, {});
  }
};

function generateUsers(count, role, userList) {
  // const users = [];
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
      role: role,
      state: 'OFFLINE'
    };
    userList.push(newUser);
  }
  // return users;
}
