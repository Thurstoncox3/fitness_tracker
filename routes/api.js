const router = require('express').Router();
const Workout = require('../models/Workout');


// GET routes for Workouts
router.get('api/workout', (req,res) => {
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
router.post('api/workout', ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// PUT routes for Workouts
router.put('/api/workout/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {$push: { exercise: req.body }}, { new: true })
    .then (dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
});

router.get('api/workout/range', (req,res) => {
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
