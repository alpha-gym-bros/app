"use strict";

const path = require("path");
const Sequelize = require("sequelize");

const database = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "/database.sqlite"),
  logging: false, //logging false prevents outputting SQL to the console on execution.
});

module.exports = database;
