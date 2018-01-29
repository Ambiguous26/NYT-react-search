/** Bring in the models to be used*/
const db = require("../models");
/** Export the controller */
module.exports = {
    /** Access all the articles in database */
    // where is the dbmodel??
    findAll: function (req, res) {
        db.Article.find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(error => res.status(422).json(error));
    },
    /** Create a new article in the databse */
    create: function (req, res) {
        db.Article.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(error => res.status(422).json(error));
    }
};