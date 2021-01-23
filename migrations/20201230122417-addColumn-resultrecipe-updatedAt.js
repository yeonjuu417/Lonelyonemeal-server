'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('resultRecipes', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('resultRecipes', 'updatedAt');
  }
};
