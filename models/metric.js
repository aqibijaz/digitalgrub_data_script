'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const Metric = sequelize.define('Metric', {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      primaryKey: true,
    },
    companyId: {
      type: DataTypes.UUID,
      references: {
        model: 'Company',
        key: 'id'
      }
    },
    metricName: DataTypes.STRING,
    label: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    freezeTableName: true
  });

  Metric.associate = function(models) {
    Metric.belongsTo(models.Company, { foreignKey: 'companyId' });
    Metric.hasMany(models.FinancialData, { foreignKey: 'metricId' });
  };

  return Metric;
};
