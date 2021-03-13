'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
      username: "bill",
      password: "bill",
      email: "wtasch@aol.com",
      name: "bill Tasch",
      img: "https://i.imgur.com/Wx6Tsqy.jpg",
      age: 1,
      isActive: true,
      },
      {
        username: "kelly",
        password: "kelly",
        email: "wtasch@aol.com",
        name: "Kelly Tasch",
        img: "https://i.imgur.com/Wx6Tsqy.jpg",
        age: 2,
        isActive: true,
        },       
        {
          username: "Tori",
          password: "Nevery",
          email: "wtasch@aol.com",
          name: "tory bug",
          img: "https://i.imgur.com/3h56PyX.jpg",
          age: 3,
          isActive: true,
          },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};


