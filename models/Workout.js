const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema ({
    exercise: [
        {
            _id: {
                type: Number, 
                requierd: true
            }
        },
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

        }
    ],
    day: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model('Workout', WorkoutSchema);
module.exports = Workout;