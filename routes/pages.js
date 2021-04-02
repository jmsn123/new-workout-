const router = require("express").Router();
const path = require("path");

router.get("/", async(req, res) => {
    console.log("GET /");
    // initial get route this is for home page to display different post 
    try {

        res.sendFile(path.join(__dirname, "../public/index.html"));
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})
router.get("/exercise", async(req, res) => {
    console.log("GET /excersize");
    // initial get route this is for home page to display different post 
    try {

        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})
router.get("/stats", async(req, res) => {
    console.log("GET /excersize");
    // initial get route this is for home page to display different post 
    try {

        res.sendFile(path.join(__dirname, "../public/stats.html"));
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})
module.exports = router