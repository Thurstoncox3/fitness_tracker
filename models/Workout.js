const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema ({
    exercise: [
        {
           type: {
                type: String,
                required: true
            }
        },
        {
            name: {
                type: String,
                required: 'Provide exercise name'
            }
        },
        {
            duration: {
                type: Number,
                required: 'Update Duration'
            },
            weight:Number,
            sets:Number,
            reps:Number,
        },
    ]
});

const Workout = mongoose.model('Workout', WorkoutSchema);
module.exports = Workout;