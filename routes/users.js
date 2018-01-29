/** Import express to handle routing */
var express = require('express');
/** Define a router */
var router = express.Router();
/** Listen to the url routings */
router.get("/api/articles", function(req, res, next) {
  console.log("This route is definitely working");
});

module.exports = router;