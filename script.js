const TOI_feeds = require("./scraper_controller/TOI_feeds.js");
const search_feeds = require("./scraper_controller/search_feeds.js");
const category_feeds = require("./scraper_controller/category_feeds.js");
const RSS_links = require("./scraper_controller/RSS_links.js");
const express = require("express");
const PORT = 8383;

const app = express();

// app.get("/",(req,res)=>{
//     res.send("<h1>Hello</h1>")
// })

app.get("/search/:query", (req, res) => {
    const query = req.params.query;
    search_feeds(RSS_links.search + query)
        .then(result => res.send(result));
});

app.get("/feeds/:query",(req,res)=>{
    const query = req.params.query;
    TOI_feeds(RSS_links[query])
        .then(result => res.send(result));
});

app.get("/c1/:query",(req,res)=>{
    const query = req.params.query;
    category_feeds(RSS_links[query])
        .then(result => res.send(result));
})

// TOI_feeds(RSS_links.top_stories);
// TOI_feeds(RSS_links.latest_feeds);
// category_feeds(RSS_links.delhi);

app.listen(PORT, () => {
    console.log("server started of port " + PORT)
})