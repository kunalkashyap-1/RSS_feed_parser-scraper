const TOI_feeds =require("./TOI_feeds.js");
const search_feeds =require("./search_feeds.js");
const category_feeds = require("./category_feeds.js");
const RSS_links = require("./RSS_links.js");
const express = require("express");
const PORT = 8383;

const app = express();
const q = "tech";




// TOI_feeds(RSS_links.top_stories);
// TOI_feeds(RSS_links.latest_feeds);
category_feeds(RSS_links.delhi);
// search_feeds(RSS_links.search+q);

app.listen(PORT, () => {
    console.log("server started of port " + PORT)
})