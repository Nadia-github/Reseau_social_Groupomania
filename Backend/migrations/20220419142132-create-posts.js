'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dateCreation: {
        allowNull: false,
        type: Sequelize.DATE
      },
      titre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      contenu: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      attachment: {
        allowNull: true,
        type: Sequelize.STRING
      },
      auteur: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts');
  }
};