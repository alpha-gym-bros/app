const Sequelize = require("sequelize");
const db = require("../sequelizeDB");

const Exercise = db.define("exercises", {
  name: { type: Sequelize.STRING, allowNull: false, unique: true },
  type: { type: Sequelize.STRING },
});

module.exports = Exercise;
