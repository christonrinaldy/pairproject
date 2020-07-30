'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mvstudio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      mvstudio.belongsTo(models.Movie)
      mvstudio.belongsTo(models.StudioTime)
    }
  };
  mvstudio.init({
    status: DataTypes.STRING,
    MovieId:DataTypes.INTEGER,
    TimeId:DataTypes.INTEGER,
    StudioId:DataTypes.INTEGER,
    StudioTimeId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mvstudio',
  });
  return mvstudio;
};