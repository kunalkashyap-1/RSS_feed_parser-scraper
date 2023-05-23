//Express API

require("dotenv").config();
const cors = require("cors");
const toiRoutes = require("./routes/toiRoutes");
const express = require("express");
const rateLimiter = require("express-rate-limit");

const app = express();
app.use(cors());

const limiter = rateLimiter({
    windowMs: 60 * 1000, // 1 minute
    max: 100,//limit each IP for 100 every minute
    message: "Rate limit exceeded, At the moment we only allow 100 requests per minute"
});

// Apply the rate limiter middleware to all requests
app.use(limiter);
app.use("/toi", toiRoutes);

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



app.get("/", async (req, res) => {
    res.send(`<div>
    <pre>${ascii_art}</pre>
    <h3>Invalid endpoint please enter endpoint with valid path</h3>
    <p>Add Valid Path /search, /feeds, /c1
     </div>`);
})

app.all("*", async (req, res) => {
    // Redirect any other route to the root URL
    res.status(404).redirect("/");
});


//server starter 
app.listen(process.env.PORT || 8383, () => {
    console.log("The server is listening...  ");
})