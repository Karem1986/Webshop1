"use strict";

const bcrypt = require('bcrypt')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "customers", //as in table
      [
        {
          name: "Charles",
          lastName: "Hurstuin",
          address: "garsten 21",
          password: bcrypt.hashSync("4689", 10),
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
          password: bcrypt.hashSync("4689", 10),
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
