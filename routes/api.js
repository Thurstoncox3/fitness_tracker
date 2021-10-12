const router = require('express').Router();
const Workout = require('../models/Workout');


// GET routes for Workouts
router.get('api/workout', (req,res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
})

// POST routes for Workouts
router.post('api/workout', ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
})