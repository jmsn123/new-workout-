const router = require("express").Router();
const viewRoutes = require("./pages")
const apiRoutes = require("./api")
router.use("/", viewRoutes);
router.use("/api", apiRoutes);

module.exports = router;