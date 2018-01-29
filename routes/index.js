/** Require express */
var router = require("express").Router();
/** Require path */
var path = require("path");
/** Require the api routes to redefine */
var apiRoutes = require("./api");

/* Define the api routes */
/** Add the api path to the /articles in apiRoutes */
/** So that when the server receives a get request with /api/articles */
/** It will look in the apiRoutes and perform the functions defined in the apiRoutes */
router.use("/api", apiRoutes);
/** If no api routes are accessed */
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

/** Export the router */
module.exports = router;