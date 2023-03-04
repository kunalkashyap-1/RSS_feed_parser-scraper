require("dotenv").config();
const cors = require("cors");
const feeds = require("./scraper_controller/feeds.js");
const search_feeds = require("./scraper_controller/search_feeds.js");
const category_feeds = require("./scraper_controller/category_feeds.js");
const express = require("express");

const app = express();
app.use(cors({
    origin: "http://localhost:3000"
}));

const ascii_art=`
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

function reqHandler(result, amt, res) {
    if (result !== undefined) {
        const Data = result.data.slice(0, (amt > 0 ? amt : result.length));
        res.json({Data});
    }
    else {
        res.status(404).json(ascii_art);
    }
}

app.get("/", (req, res) => {
    res.send(`<div>
    <h3>Invalid endpoint please enter endpoint with valid path</h3>
    <p>Add Valid Path /search, /feeds, /c1
     </div>`)
})

app.get("/search/:path", (req, res) => {
    const path = `${process.env.search}${req.params.path}`;
    const amt = req.query.limit;
    // console.log(path);
    // console.log(amt);
    search_feeds(path)
        .then(result => reqHandler(result, amt, res));
});

app.get("/feeds/:path", (req, res) => {
    const path = req.params.path;
    // console.log(process.env[query]);
    const amt = req.query.limit;

    feeds(process.env[path])
        .then(result => reqHandler(result, amt, res));
});

app.get("/c1/:path", (req, res) => {
    const path = req.params.path;
    const amt = req.query.limit;
    category_feeds(process.env[path])
        .then(result => reqHandler(result, amt, res));
});

app.all("*", (req, res) => {
    res.status(404).send(`<pre>${ascii_art}</pre>`);
});

app.listen(process.env.PORT, () => {
    console.log("server active ")
})