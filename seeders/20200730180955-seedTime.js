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
   return queryInterface.bulkInsert('Times',[
     {
      time:'09:00',
      createdAt:new Date(),
      updatedAt:new Date()
   },
   {
    time:'12:00',
    createdAt:new Date(),
      updatedAt:new Date()
 },
 {
  time:'16:00',
  createdAt:new Date(),
      updatedAt:new Date()
},
{
  time:'20:00',
  createdAt:new Date(),
      updatedAt:new Date()
}])
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Times',null,{})
  }
};
