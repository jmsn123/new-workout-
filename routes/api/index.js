const router = require("express").Router();
const workoutroutes = require("./excersise");
// const userRoutes = require("./user");
// const projectRoutes = require("./projectRoutes");

router.use("/workouts", workoutroutes);
// router.use("/login", userRoutes);

module.exports = router;