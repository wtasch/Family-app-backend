'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    workOn: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  Event.associate = function(models) {
    Event.hasMany(models.User, { foreignKey: 'age' })
    Event.hasMany(models.Post, { foreignKey: 'eventId' })//was c
    Event.hasMany(models.Task, { foreignKey: 'eventId' })//was c
  };
  return Event;
};


