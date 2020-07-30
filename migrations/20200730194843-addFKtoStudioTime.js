'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addColumn('StudioTimes','StudioId',{
      type:Sequelize.INTEGER,
      references:{
        model:'Studios',
        key:'id'
      }
    })
    .then(data=>{
      return queryInterface.addColumn('StudioTimes','TimeId',{
      type:Sequelize.INTEGER,
      references:{
        model:'Times',
        key:'id'
      }
      })
    })
    .catch(err=>{
      console.log(err)
    })
  },

  down: async (queryInterface, Sequelize) => {
   
    return queryInterface.removeColumn('StudioTimes','StudioId',{})
    .then(data=>{
      return queryInterface.removeColumn('StudioTimes','TimeId',{})
    })
    .catch(err=>{
      console.log(err)
    })
  }
};
