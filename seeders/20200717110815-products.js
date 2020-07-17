"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "products", //as in table
      [
        {
          description: "lemonade",
          imageurl: "https://i.imgur.com/AD3MbBi.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "liquor",
          imageurl: "https://i.imgur.com/AD3MbBi.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "bread",
          imageurl: "https://i.imgur.com/AD3MbBi.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};
