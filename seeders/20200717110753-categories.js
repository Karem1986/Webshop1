"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "categories", //as in table
      [
        {
          name: "drink",
          imageurl: "https://www.liquor.com/thmb/tVgTKmhOqMwIZtqE_CYlbVwoKnY=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__12__31103100__Shirley-Temple-720x720-recipe-659e8198a2e840fc8ab7f48d9de60ad5.jpg",
          description: "fanta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "milk",
          imageurl: "https://www.liquor.com/thmb/tVgTKmhOqMwIZtqE_CYlbVwoKnY=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__12__31103100__Shirley-Temple-720x720-recipe-659e8198a2e840fc8ab7f48d9de60ad5.jpg",
          description: "soyamilk",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "bread",
          imageurl: "https://www.liquor.com/thmb/tVgTKmhOqMwIZtqE_CYlbVwoKnY=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__12__31103100__Shirley-Temple-720x720-recipe-659e8198a2e840fc8ab7f48d9de60ad5.jpg",
          description: "white bread",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "fruit",
          imageurl: "https://www.liquor.com/thmb/tVgTKmhOqMwIZtqE_CYlbVwoKnY=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__12__31103100__Shirley-Temple-720x720-recipe-659e8198a2e840fc8ab7f48d9de60ad5.jpg",
          description: "banana",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
