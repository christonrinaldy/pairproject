'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class StudioTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StudioTime.belongsTo(models.Studio)
      StudioTime.belongsTo(models.Time)
    }
  };
  StudioTime.init({
    
    current_capacity: DataTypes.INTEGER,
    name:DataTypes.STRING,
    TimeId:DataTypes.INTEGER,
    StudioId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StudioTime',
    hooks:{
      beforeCreate:(instance,options)=>{
        if(instance.status===undefined){
          instance.status=false
        }
      }
    }
  });
  return StudioTime;
};