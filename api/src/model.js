const Exercises = require("./database/models/Exercise.model");

exports.getExercise = name => {
  return Exercises.findAll({ where: { name: name } });
};

exports.setExercise = exercise => {
  const { name, type } = exercise;
  return Exercises.create({ name: name, type: type });
};

exports.deleteExercise = name => {
  return Exercises.destroy({ where: { name: name } });
};
