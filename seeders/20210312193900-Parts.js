'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Parts', [
      {
        eventId :1,
      desc: "radial saw",
      firstName: "barn",
      lastName: "cabin",
      image: "https://i.imgur.com/Wx6Tsqy.jpg",
      completed: "no"
      },
      {
        eventId:2,
        desc: "framing air gun",
        firstName: "barn",
        lastName: "cabin",
        image: "https://i.imgur.com/3h56PyX.jpg",
        completed: "no"
      },
      {
        eventId:3,
        desc: "tools",
        firstName: "barn",
        lastName: "farm",
        image: "https://i.imgur.com/SN2XGft.jpg",
        completed: "yes"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Parts', null, {});
  }
};

