const router = require("express").Router();
const path = require("path");
const workout = require("../../models")

router.get("/", async(req, res) => {
    console.log("GET /api/Workouts");
    workout.Workout.find()
        .then(data => {
            data.forEach(item => {
                let sum = 0;
                item.forEach(dur => {
                    sum += dur.duration
                })
                item.duration = sum;
            })
            res.json(data)
        }).catch(err => {

            res.status(500).json(err);
        })

});
router.put("/:id", ({ body, params }, res) => {

    const filter = { _id: params.id }
    const workouts = workout.Workout.findOneAndUpdate(filter, { exercises: body }, { new: true })
        .then((workout) => {
            console.log(workout);
            res.json(workout)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
});
router.post("/", ({ body }, res) => {
    console.log("Dataget");
    const workouts = workout.Workout.create(body)
        .then((workout) => {
            console.log(workout);
            res.json(workout)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
});
router.get("/range", ({ query }, res) => {
    console.log("GET RANGE");
    const workouts = workout.Workout.find({})
        .then(item => {
            //console.log(item);
            res.json(item)
        }).catch(err => {

            console.log(err);
            res.status(400).json(err);

        })
});


module.exports = router;