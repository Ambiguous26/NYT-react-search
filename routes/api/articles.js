/** Require express for routing */
const router = require("express").Router();
/** Require the database controllers */
const articleController = require("../../controllers/articleController");


/** Contruct the routings */
router.route("/")
.get(articleController.findAll)
.post(articleController.create);

module.exports = router;