'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const ReportingPeriod = sequelize.define('ReportingPeriod', {
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
    fiscalYear: DataTypes.INTEGER,
    fiscalPeriod: DataTypes.STRING,
    form: DataTypes.STRING,
    filedDate: DataTypes.DATE,
    frame: DataTypes.STRING
  }, {
    freezeTableName: true
  });

  ReportingPeriod.associate = function(models) {
    ReportingPeriod.belongsTo(models.Company, { foreignKey: 'companyId' });
  };

  return ReportingPeriod;
};
