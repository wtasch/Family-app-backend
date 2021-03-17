'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    eventId: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    image: DataTypes.STRING,
    completed: DataTypes.STRING
  }, {
    sequelize,
  });
  Task.associate = function(models) {
    // Task.belongsTo(models.User, { foreignKey: 'userId' })
    Task.belongsTo(models.Event, { foreignKey: 'eventId' })
  };
  return Task;
};


