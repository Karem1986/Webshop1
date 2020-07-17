'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsTo(models.category)
      product.belongsToMany(models.customer, {
        through: "orders", //as name of the table
        foreignKey: "productId", //Example at:https://reader.codaisseur.com/courses/backend-bootcamp/02-orm/relations/many-to-many
      })
    }
  };
  product.init({
    description: DataTypes.TEXT, //THEY unlimited characters
    imageurl: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};