require("dotenv").config();
const TOI_feeds = require("./scraper_controller/TOI_feeds.js");
const search_feeds = require("./scraper_controller/search_feeds.js");
const category_feeds = require("./scraper_controller/category_feeds.js");
const express = require("express");
const PORT = 8383;

const app = express();

// app.get("/",(req,res)=>{
//     res.send("<h1>Hello</h1>")
// })
app.get("/search/:query", (req, res) => {
    const query = `${process.env.search}${req.params.query}`;
    search_feeds(`${query}`)
        .then(result => res.json(result));
});

app.get("/feeds/:query", (req, res) => {
    const query = req.params.query;
    // console.log(process.env[query]);
    TOI_feeds(process.env[query])
        .then(result => res.json(result));
});

app.get("/c1/:query", (req, res) => {
    const query = req.params.query;
    category_feeds(process.env[query])
        .then(result => res.json(result));
})


app.listen(PORT, () => {
    console.log("server started of port " + PORT)
})