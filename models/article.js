/** Require mongoose as the database ORM */
const mongoose = require("mongoose");
/** Reference a new mongoose schema */
const Schema = mongoose.Schema;
/** Create the schema appropriate to the sitaution */
const articleSchema = new Schema({
    /** Title for an article is required */
    title: {
        type: String,
        required: true
    },
    /** Date article was published */
    date: {
        type: Date,
    },
    /** Url for the actual article */
    url: {
        type: String
    }
});
/** Create an article model using the schema defined */
const Article = mongoose.model("Article", articleSchema);
module.exports = Article;