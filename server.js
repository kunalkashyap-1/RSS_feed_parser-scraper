//Express API

require("dotenv").config();
const cors = require("cors");
const toiRoutes = require("./routes/toiRoutes");
const nytRoutes = require("./routes/nytRoutes");
const wiredRoutes = require("./routes/wiredRoutes");
const express = require("express");
const rateLimiter = require("express-rate-limit");

const app = express();
app.use(cors());

const limiter = rateLimiter({
  windowMs: 60 * 1000, // 1 minute
  max: 100, //limit each IP for 100 every minute
  message:
    "Rate limit exceeded, At the moment we only allow 100 requests per minute",
});

// Apply the rate limiter middleware to all requests
app.use(limiter);
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


app.use("/toi", toiRoutes);
app.use("/nyt", nytRoutes);
app.use("/wired", wiredRoutes);


app.get("/", async (req, res) => {
  res.send(`<div>
    <pre>${ascii_art}</pre>
    <h1>For more information, <a href="https://feedparsify.netlify.app/">read Docs</a><h1/> 
     </div>`);
});

app.get("/search/:path",async (req,res)=>{
    res.redirect(`/toi/search/${req.params.path}`);
});


app.all("*", async (req, res) => {
  // Redirect any other route to the root URL
  res.status(404).redirect("/");
});

//server starter
app.listen(process.env.PORT || 8383, () => {
  console.log("The server is listening...  ");
});
