"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "customers", //as in table
      [
        {
          name: "Charles",
          lastName: "Hurstuin",
          address: "garsten 21",
          email: "charles@io.com",
          phone: 897605,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Louis",
          lastName: "kurtijn",
          address: "herst 21",
          email: "louis@tui.com",
          phone: 897605,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("customers", null, {});
  },
};
