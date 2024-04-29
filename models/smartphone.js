'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Smartphone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Smartphone.init({
    type: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image_url: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    brand: DataTypes.STRING,
    Discount_Id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Smartphone',
  });
  return Smartphone;
};