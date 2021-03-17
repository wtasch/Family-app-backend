'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Part = sequelize.define('Part', {
    eventId: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    image: DataTypes.STRING,
    completed: DataTypes.STRING
  }, {
    sequelize,
  });
  Part.associate = function(models) {
    // Task.belongsTo(models.User, { foreignKey: 'userId' })
    Part.belongsTo(models.Event, { foreignKey: 'eventId' })
  };
  return Part;
};

