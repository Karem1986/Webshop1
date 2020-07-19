"use strict";
//SEPARATE MIGRATION FOR RELATIONS OR FOREIGN KEYS 
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("orders", "productId", {
      type: Sequelize.INTEGER,
      references: {
        model: "products", //always the name here of model in plural 
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE", //cascade becasue is a join table 
    });

    await queryInterface.addColumn("orders", "customerId", {
      type: Sequelize.INTEGER,
      references: {
        model: "customers",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE", //Cascade because orders is a join table 
    });

    await queryInterface.addColumn("products", "categoryId", {
      type: Sequelize.INTEGER,
      references: {
        model: "categories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("orders", "productId");
    await queryInterface.removeColumn("orders", "customerId");
    await queryInterface.removeColumn("products", "categoryId");
  },
};
