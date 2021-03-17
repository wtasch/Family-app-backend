'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    img: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  Post.associate = function(models) {
    // Post.belongsTo(models.User, { foreignKey: 'userId' })
    Post.belongsTo(models.Event, { foreignKey: 'eventId' })
  };
  return Post;
};



