const Sequelize = require("sequelize");
const db = require("../sequelizeDB");

const Exercise = db.define("exercises", {
  name: { type: Sequelize.STRING, allowNull: false, unique: true },
  type: { type: Sequelize.STRING },
});

// Add the exercise table to the database
Exercise.sync({ force: true }).catch((error) => console.error(error));

module.exports = Exercise;
