'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      customer.belongsToMany(models.product, { //example at:https://reader.codaisseur.com/courses/backend-bootcamp/02-orm/relations/many-to-many
        through: "orders",
        foreignKey: "customerId",
      }) //A customer can order many 
      //products and a product can be ordered by many customers
      // that is why is belongs to many
    }
  };
  customer.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'customer',
  });
  return customer;
};