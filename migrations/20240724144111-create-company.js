'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Company', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      accn: Sequelize.STRING,
      cik: {
        type: Sequelize.NUMERIC,
        unique: true,
        allowNull: false
      },
      cik_name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      entityName: Sequelize.STRING,
      loc: Sequelize.STRING,
      end: Sequelize.DATE,
      val: Sequelize.NUMERIC,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Company');
  }
};
