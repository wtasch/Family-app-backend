'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [
      {
      taskID:1,
      desc: "mow grass",
      firstName: "Kelly",
      lastName: "jones",
      image: "https://i.imgur.com/Wx6Tsqy.jpg",
      completed: "no"
      },
      {
        taskID:2,
        desc: "paint well house",
        firstName: "Tori",
        lastName: "smith",
        image: "https://i.imgur.com/3h56PyX.jpg",
        completed: "no"
      },
      {
        taskID:3,
        desc: "wax boat",
        firstName: "bill",
        lastName: "jones",
        image: "https://i.imgur.com/SN2XGft.jpg",
        completed: "yes"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};