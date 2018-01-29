/** Require express */
const router = require("express").Router();
/** Require the article router to be able to use */
const articleRoutes = require("./articles");


/** Define the main usage of the router */
router.use("/articles", articleRoutes);
/** Export the router */
module.exports = router;