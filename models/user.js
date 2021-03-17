'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    age: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  User.associate = function(models) {
     User.belongsTo(models.Event, { foreignKey: 'age' })
     User.hasMany(models.Post, { foreignKey: 'userId' })
    //  User.hasMany(models.Task, { foreignKey: 'eventId' })
  };
  return User;
};


