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
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false // 1 chiffre, 1 minusule, 1 majuscule, 8 caractères
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false, // check format mail
      validate: {
        isEmail: true,
      }
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM,
      values: ['CLIENT', 'EMPLOYEE', 'ADMIN'],
      defaultValue: 'CLIENT',
      allowNull: false
    }
  }, {
    timestamps: false
  });
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.ticket, {
      as: 'tickets',
      foreignKey: 'idUser'
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
  
