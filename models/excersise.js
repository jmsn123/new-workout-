const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        name: {
            type: String,
            trim: true,
            required: "Enter a name for excersise"
        },
        type: {
            type: String,
            required: "Enter a type"
        },
        weight: {
            type: Number,
            required: "Enter a weight"
        },
        sets: {
            type: Number,
            required: "Enter a sets"
        },
        reps: {
            type: Number,
            required: "please input reps"
        },
        duration: {
            type: Number,
            required: "Enter a type"
        },
        distance: {
            type: Number,
            default: 0
        },
    }],
}, {
    toJSON: {
        virtuals: true
    }
}, );
exerciseSchema.virtual("totalDuration").get(function() {


    return this.exercises.reduce((total, workout) => {
        return total + workout.duration;
    }, 0);
});

const Excercise = mongoose.model("exercise", exerciseSchema);

module.exports = Excercise;