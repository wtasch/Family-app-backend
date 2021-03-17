'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [
      {
        eventId :1,
      desc: "Mow Grass",
      firstName: "Kelly",
      lastName: "put gas in mower pls",
      image: "https://i.imgur.com/68614en.jpg",
      completed: "4-15-21"
      },
      {
        eventId:2,
        desc: "Paint Well House",
        firstName: "Tori",
        lastName: "use spray gun",
        image: "https://i.imgur.com/1kkLdUc.jpg",
        completed: "4-17-21"
      },
      {
        eventId:3,
        desc: "wax boat",
        firstName: "bill",
        lastName: "wash it first please",
        image: "https://i.imgur.com/SN2XGft.jpg",
        completed: "4-25-21"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};

