'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    // Create the movies table, and all the columns for review content
    queryInterface.createTable('movies',
        {id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }, 
        title: Sequelize.STRING,
        review: Sequelize.TEXT,
        image: Sequelize.TEXT,
        rating: Sequelize.INTEGER,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE

      })

  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('movies')
  }
};
