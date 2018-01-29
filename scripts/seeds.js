/** Import the mongo ORM */
const mongoose = require("mongoose");
/** Import the database models */
const db = require("../models");
/** Make a connectioin to mongoose */
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/nytreact",
    {
        useMongoClient: true
    }
);
db.Article.remove({}).then(() => {
    db.Article.collection.insert({
        title: "Anchorman",
        date: new Date("2004"),
        url: "http://www.imdb.com/title/tt0357413/mediaviewer/rm2714340352"
    }).then(data => {
        console.log(data);
        process.exit(0);
    }).catch(error => {
        console.error(error);
        process.exit(1);
    });
})