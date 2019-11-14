'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gain = sequelize.define('gain', {
    idGain: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
      timestamps: false
  });
  Gain.associate = function(models) {
    // associations can be defined here
  };
  return Gain;
};