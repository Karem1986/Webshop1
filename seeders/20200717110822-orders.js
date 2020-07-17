"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "orders", //as in table
      [
        {
          amount: "100",
          productId: 1,
          customerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "66",
          productId: 2,
          customerId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("orders", null, {});
  },
};

