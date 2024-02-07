var DataTypes = require("sequelize").DataTypes;
var _applicants = require("./applicants");
var _applicants_professions = require("./applicants_professions");
var _professions = require("./professions");

function initModels(sequelize) {
  var applicants = _applicants(sequelize, DataTypes);
  var applicants_professions = _applicants_professions(sequelize, DataTypes);
  var professions = _professions(sequelize, DataTypes);

  applicants_professions.belongsTo(applicants, { as: "applicant", foreignKey: "applicant_id"});
  applicants.hasMany(applicants_professions, { as: "applicants_professions", foreignKey: "applicant_id"});
  applicants_professions.belongsTo(professions, { as: "profession", foreignKey: "profession_id"});
  professions.hasMany(applicants_professions, { as: "applicants_professions", foreignKey: "profession_id"});

  return {
    applicants,
    applicants_professions,
    professions,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
