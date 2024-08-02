'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FinancialData', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      metricId: {
        type: Sequelize.UUID,
        references: {
          model: 'Metric',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      value: Sequelize.NUMERIC,
      unit: Sequelize.STRING,
      endDate: Sequelize.DATE,
      accessionNumber: Sequelize.STRING,
      fiscalYear: Sequelize.INTEGER,
      fiscalPeriod: Sequelize.STRING,
      form: Sequelize.STRING,
      filedDate: Sequelize.DATE,
      frame: Sequelize.STRING,
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
    await queryInterface.dropTable('FinancialData');
  }
};
