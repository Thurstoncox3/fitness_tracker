const router = require('express').Router();
const Workout = require('../models/Workout');


// GET routes for Workouts
router.get('/api/workouts', (req,res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {$sum: '$exercise.duration'}, 
                totalDistance: {$sum: '$exercise.distance'}}
        }
    ])
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
});

// POST routes for Workouts
router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// PUT routes for Workouts
router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {$push: { exercises: req.body }}, { new: true })
    .then (dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.get('/api/workouts/range', (req,res) => {
    Workout.aggregate([
        {
            $addFields: { 
                totalDuration: { $sum: '$exercise.duration'}, 
                totalWeight: {$sum: '$exercise.weight'}},
        }
    ])
    .then(dbWorkout => {
        const prevWorkouts = dbWorkout.slice(-7);
        res.json(prevWorkouts);
      })
      .catch(err => {
        res.json(err);z
      });
});


module.exports = router;
