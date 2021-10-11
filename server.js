const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(logger("dev"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", { useNewUrlParser: true });

// GET routes for Workouts

// POST routes for Workouts

// GET routes for Exercise

// POST routes for Exercise

// GET routes for Stats

// POST routes for Stats

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
