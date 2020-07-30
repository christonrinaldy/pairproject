'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Studios', [
     {
      name: 'Studio 1',
      capacity: 10,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: 'Studio 2',
      capacity: 14,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: 'Studio 3',
      capacity: 16,
      createdAt: new Date(),
      updatedAt: new Date()
     }
    ])
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Studios',null,{})
  }
};
