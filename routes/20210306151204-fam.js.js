'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      {
        title:'lets go',
        body: 'body here',
        img: 'http',
        userId: 1,
        taskId: 1
      },
      {
        title:'lets go2',
        body: 'body here3',
        img: 'https:/',
        userId: 2,
        taskId: 2
      },
      {
        title:'lets go3',
        body: 'body here4',
        img: 'https:',
        userId: 3,
        taskId: 3
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
