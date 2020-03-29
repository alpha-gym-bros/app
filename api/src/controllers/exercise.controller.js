"use strict";

const model = require("../model.js");
const express = require("express");
const router = express.Router();

/**
 * A test/init post request for an exercise
 */
router.post("/exercise/", (req, res) => {
  if (!req.body) {
    res.sendStatus(400);
  } else {
    model
      .setExercise(req.body)
      .then(() => res.sendStatus(200))
      .catch((error) => {
        console.error(error);
        res.sendStatus(500);
      });
  }
});

/**
 * A test/init get request for an exercise
 */
router.get("/exercise/:name", (req, res) => {
  model
    .getExercise(req.params.name)
    .then((exercise) => res.status(200).json(exercise))
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

/**
 * A test/init delete request for an exercise
 */
router.delete("/exercise/:name", (req, res) => {
  model
    .deleteExercise(req.params.name)
    .then(() => res.sendStatus(200))
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

module.exports = { router };
