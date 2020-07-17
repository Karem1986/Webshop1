'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //JOIN TABLE 
      order.belongsTo(models.product)//order belongs to product
      order.belongsTo(models.customer)//order belongs to customer 

    }
  };
  order.init({

    amount: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};