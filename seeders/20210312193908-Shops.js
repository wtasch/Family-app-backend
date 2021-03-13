'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shops', [
      {
        eventId :1,
      desc: "fittings",
      firstName: "tractor",
      lastName: "lowes",
      image: "https://i.imgur.com/Wx6Tsqy.jpg",
      completed: "no"
      },
      {
        eventId:2,
        desc: "seat",
        firstName: "cottage",
        lastName: "walmart",
        image: "https://i.imgur.com/3h56PyX.jpg",
        completed: "no"
      },
      {
        eventId:3,
        desc: "cylinder",
        firstName: "tractor",
        lastName: "green spring tractor",
        image: "https://i.imgur.com/SN2XGft.jpg",
        completed: "yes"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Shops', null, {});
  }
};

