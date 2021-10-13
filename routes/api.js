const router = require('express').Router();
const Workout = require('../models/Workout');


// GET routes for Workouts
router.get('api/workout', (req,res) => {
    Workout.find({})
    .populate("exercise")
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
router.put('api/workout/:id', (req, res) => {
    Workout.findByIdAndUpdate({}, {$push: { exercise: req.body }}, { new: true })
    .then (dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
});

// GET routes for Workouts
router.get('api/workout/range', (req,res) => {
    Workout.find({})
    .populate("exercise")
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
});

router.get('/aggregate', async (req, res) => {
    Workout.aggregate([
        {$match: {} },
        { $project : { _id : 0, 'duration' : {}} },
    ]).then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

module.exports = router;
