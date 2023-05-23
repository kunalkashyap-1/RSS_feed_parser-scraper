const getFeeds = require("../scraper_controller/nytScrappers");
const reqHandler = require("../configs/reqHandler");
const { nyt } = require("../configs/links");

const feeds = async (req, res) => {
  const path = req.params.path;
  const amt = req.query.limit;
  // Call feeds function with path and limit, and handle the result with reqHandler
  getFeeds(nyt[path])
    .then((result) => reqHandler(result, amt, res))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
};

module.exports = { feeds };
