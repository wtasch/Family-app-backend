module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      {
      name: "Vacation",
      img: "https://i.imgur.com/xRKXlki.jpg",
      workOn: "4/12/21",
      location: "tenn", 
      eventId :1,
      },
      {
        name: "Bill in Chicago",
        img: "https://i.imgur.com/DBucM2O.jpg",
        workOn: "4/25/21",
        location: "Chicago", 
        eventId :2,
      },
      {
        name: "Brandi visit Family",
        img: "https://i.imgur.com/ZIZRHb8.png",
        workOn: "4/1/21",
        location: "tenn", 
        eventId :3,
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
