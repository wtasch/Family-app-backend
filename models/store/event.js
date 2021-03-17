'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    workOn: DataTypes.STRING,
    location: DataTypes.STRING,
    eventId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Event',
  });

  return Event;
};


