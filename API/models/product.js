const { Model, DataTypes } = require("sequelize");
const connection = require("./db");
const bcrypt = require("bcryptjs");

class Product extends Model {}

Product.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [50, 1000], 
      },
    },
    unit_price: {
      type: DataTypes.DECIMAL(10, 2), 
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    stock_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['alimentation', 'hygiène', 'entretien', 'autre']],
      },
    },
  },
  {
    sequelize: connection,
    modelName: 'Product',
  }
);

module.exports = Product;