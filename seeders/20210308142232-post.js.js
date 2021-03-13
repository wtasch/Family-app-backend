'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      {
      title:"great app",
      body: "this is a great app",
      img: "https://i.imgur.com/Wx6Tsqy.jpg",
      userId: 1,
      eventId: 1,
      },
      {
        title:"bail hay",
        body: "make hay while the sun shines",
        img: "https://i.imgur.com/LY1Rmzd.jpg",
        userId: 2,
        eventId: 2,
        },
        {
          title:"dad",
          body: "dad is great",
          img: "https://i.imgur.com/2k8JE9S.jpg",
          userId: 3,
          eventId: 3,
          },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};


