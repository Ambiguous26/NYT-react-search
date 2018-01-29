/** Import the website scraper */
import axios from "axios";
/** Export the API */
export default {
    /** Send a get request for all the articles */
    getArticles: function(){
        return axios.get("/api/articles");
    }
};