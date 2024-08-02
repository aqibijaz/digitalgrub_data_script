'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const FinancialData = sequelize.define('FinancialData', {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      primaryKey: true,
    },
    metricId: {
      type: DataTypes.UUID,
      references: {
        model: 'Metric',
        key: 'id'
      }
    },
    value: DataTypes.NUMERIC,
    unit: DataTypes.STRING,
    endDate: DataTypes.DATE,
    accessionNumber: DataTypes.STRING,
    fiscalYear: DataTypes.INTEGER,
    fiscalPeriod: DataTypes.STRING,
    form: DataTypes.STRING,
    filedDate: DataTypes.DATE,
    frame: DataTypes.STRING
  }, {
    freezeTableName: true
  });

  FinancialData.associate = function(models) {
    FinancialData.belongsTo(models.Metric, { foreignKey: 'metricId' });
  };

  return FinancialData;
};
