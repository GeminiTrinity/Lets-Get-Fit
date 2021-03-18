const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then((workoutDB) => {
        res.json(workoutDB);
    })
})

router.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate(
            { _id: req.params.id },
            { 
            $push: {
                exercises: [req.body],
            },
            }
        )
        .then((newWorkout) => {
            res.json(newWorkout);
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration",
                },
                totalWeight: {
                    $sum: "$exercises.weight",
                },
            },
        },
        {
        $sort: ({ date: -1 })
        },
        {
            $limit: 7
        }
    ])
    .then(workoutDB => {
        console.log(workoutDB);
        res.json(workoutDB);
    })
});

router.get("/api/workouts/:range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration",
                },
                totalWeight: {
                    $sum: "$exercises.weight",
                },
            },
        },
        {
        $sort: ({ date: -1 })
        },
        {
            $limit: 7
        }
    ])
    .then(workoutDB => {
        console.log(workoutDB);
        res.json(workoutDB);
    })
});

module.exports = router;