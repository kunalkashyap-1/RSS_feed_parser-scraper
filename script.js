//Express API

require("dotenv").config();
const cors = require("cors");
const feeds = require("./scraper_controller/feeds.js");
const search_feeds = require("./scraper_controller/search_feeds.js");
const category_feeds = require("./scraper_controller/category_feeds.js");
const express = require("express");

const app = express();
app.use(cors());

const ascii_art = `
███████ ██████  ██████   ██████  ██████      ██   ██  ██████  ██   ██                                            
██      ██   ██ ██   ██ ██    ██ ██   ██     ██   ██ ██  ████ ██   ██                                            
█████   ██████  ██████  ██    ██ ██████      ███████ ██ ██ ██ ███████                                            
██      ██   ██ ██   ██ ██    ██ ██   ██          ██ ████  ██      ██                                            
███████ ██   ██ ██   ██  ██████  ██   ██          ██  ██████       ██                                            
                                                                                                                 
                                                                                                                 
██████   █████   ██████  ███████     ███    ██  ██████  ████████     ███████  ██████  ██    ██ ███    ██ ██████  
██   ██ ██   ██ ██       ██          ████   ██ ██    ██    ██        ██      ██    ██ ██    ██ ████   ██ ██   ██ 
██████  ███████ ██   ███ █████       ██ ██  ██ ██    ██    ██        █████   ██    ██ ██    ██ ██ ██  ██ ██   ██ 
██      ██   ██ ██    ██ ██          ██  ██ ██ ██    ██    ██        ██      ██    ██ ██    ██ ██  ██ ██ ██   ██ 
██      ██   ██  ██████  ███████     ██   ████  ██████     ██        ██       ██████   ██████  ██   ████ ██████  
                                                                                                                 
                                                                                                                 
`;

//request handler function 
function reqHandler(result, amt, res) {
    try{
    //if proper results have been found
    if (result !== undefined) {
        const {data} = result;
        const Data = data.slice(0, amt || data.length);
        res.status(200).json({ Data });
    }
    //if no such path is available
    else {
        res.status(404).json(ascii_art);
    }}
    catch{
        res.sendStatus(500);
    }
}

app.get("/", async (req, res) => {
    res.send(`<div>
    <pre>${ascii_art}</pre>
    <h3>Invalid endpoint please enter endpoint with valid path</h3>
    <p>Add Valid Path /search, /feeds, /c1
     </div>`);
})

app.get("/search/:path", async (req, res) => {
    const path = `${process.env.search}${req.params.path}`;
    const amt = req.query.limit;
    // Call search_feeds function with path and limit, and handle the result with reqHandler
    search_feeds(path)
        .then(result => reqHandler(result, amt, res))
        .catch(error => {
            console.log(error);
            res.sendStatus(500)});
});

app.get("/feeds/:path", async (req, res) => {
    const path = req.params.path;
    // console.log(process.env[query]);
    const amt = req.query.limit;
    // Call feeds function with path and limit, and handle the result with reqHandler
    feeds(process.env[path])
        .then(result => reqHandler(result, amt, res))
        .catch(error => {
            console.log(error);
            res.sendStatus(500)});
});

app.get("/c1/:path", async (req, res) => {
    const path = req.params.path;
    const amt = req.query.limit;
    // Call category_feeds function, and handle the result with reqHandler
    category_feeds(process.env[path])
        .then(result => reqHandler(result, amt, res))
        .catch(error => {
            console.log(error);
            res.sendStatus(500)});
});

app.all("*", async (req, res) => {
    // Redirect any other route to the root URL
    res.status(404).redirect("/");
});


//server starter 
app.listen(process.env.PORT || 8383, () => {
    console.log("server active ");
})