const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            exerciseType: {
                type: String,
                trim: true,
                required: "Please enter an exercise type."
            },
            exerciseName: {
                type: String,
                trim: true,
                required: "Please enter the name of the exercise."
            },
            distance: {
                type: Number,
                required: "Please enter how long you traveled."
            },
            duration: {
                type: Number,
                required: "Please enter the exercise duration."
            },
            weight: {
                type: Number,
                required: "Please enter the total number of weights used."
            },
            reps: {
                type: Number,
                required: "Please enter the amount of reps you completed."
            },
            sets: {
                type: Number,
                required: "Please enter the amount of sets you completed."
            },
        },
    ],
});

const Workout = mongoose.model("Workout", workoutSchema)
module.exports = Workout;