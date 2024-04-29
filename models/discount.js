'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Discount.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Discount name is require"
        },
        notNull: {
          msg: "Discount name is require"
        }
      }
    },
    description: DataTypes.TEXT,
    discount_percent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Discount percent is require"
        },
        notNull: {
          msg: "Discount percent name is require"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Discount',
  });
  return Discount;
};