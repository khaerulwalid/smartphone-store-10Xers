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
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Type smartphone is require"
        },
        notNull: {
          msg: "Type smartphone is require"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Price is require"
        },
        notNull: {
          msg: "Price is require"
        }
      }
    },
    image_url: DataTypes.STRING,
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Quantity is require"
        },
        notNull: {
          msg: "Quantity is require"
        }
      }
    },
    description: DataTypes.TEXT,
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Brand is require"
        },
        notNull: {
          msg: "Brand is require"
        }
      }
    },
    Discount_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Discount Id is require"
        },
        notNull: {
          msg: "Discount Id is require"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Smartphone',
  });
  return Smartphone;
};