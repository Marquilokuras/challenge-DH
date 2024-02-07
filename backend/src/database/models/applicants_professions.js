const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applicants_professions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    applicant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'applicants',
        key: 'id'
      }
    },
    profession_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'professions',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'applicants_professions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "applicant_id",
        using: "BTREE",
        fields: [
          { name: "applicant_id" },
        ]
      },
      {
        name: "profession_id",
        using: "BTREE",
        fields: [
          { name: "profession_id" },
        ]
      },
    ]
  });
};
