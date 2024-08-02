'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      primaryKey: true,
    },
    accn: {
      type: DataTypes.STRING
    },
    cik: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    entityName: {
      type: DataTypes.STRING
    },
    loc: {
      type: DataTypes.STRING
    },
    end: {
      type: DataTypes.DATE
    },
    val: {
      type: DataTypes.NUMERIC
    }
  }, {
    freezeTableName: true
  });

  Company.associate = function(models) {
    Company.hasMany(models.Metric, { foreignKey: 'companyId' });
  };

  return Company;
};
