'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    idUser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    userName: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING // 1 chiffre, 1 minusule, 1 majuscule, 8 caractères
    },
    email: {
      type: DataTypes.STRING, // check format mail
      validate: {
        isEmail: true,
      },
    },
    isConnected: {
      type: DataTypes.BOOLEAN // default: false
    },
    role: {
      type: DataTypes.ENUM,
      values: ['CLIENT', 'EMPLOYE', 'RESPONSABLE']
    },
    state: {
      type: DataTypes.ENUM,
      values: ['EN LIGNE', 'HORS LIGNE']
    },
  }, {
    timestamps: false
  });
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.ticket, {
      as: 'tickets'
    })
  };

  User.beforeCreate((user, options, fn) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        console.log('Error while generating bcrypt salt.');
        console.log(err);
        fn(err, null);
        return;
      }

      bcrypt.hash(user.password, salt, null, (err, hash) => {
        if (err) {
          console.log('Error while generating bcrypt hash.');
          console.log(err);
          fn(err, null);
          return;
        }
        user.password = hash;
        fn(null, user);
        return user;
      });
    });
  });
  return User;
};