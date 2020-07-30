'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Studio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Studio.belongsToMany(models.Time,{through:models.StudioTime})
    }
  };
  Studio.init({
    name: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    current_capacity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Studio',
  });
  return Studio;
};