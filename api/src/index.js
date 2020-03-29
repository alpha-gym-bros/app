"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const port = 5775; // Randomly unassigned port chosen from IANA.org

const exercise = require("./controllers/exercise.controller");

// Middleware for handling bodies in POST requests
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// Middleware for the server to use our REST API through the router
server.use("/api", exercise.router);

server.listen(port, () => {
  console.log("listening on port", port);
});
