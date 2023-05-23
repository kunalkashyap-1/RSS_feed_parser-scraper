const getFeeds = require("../scraper_controller/wiredScrappers");
const reqHandler = require("../configs/reqHandler");
const { wired } = require("../configs/links");

const feeds = async (req, res) => {
  const path = req.params.path;
  const amt = req.query.limit;
  // Call feeds function with path and limit, and handle the result with reqHandler
  getFeeds(wired[path])
    .then((result) => reqHandler(result, amt, res))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
};

module.exports = { feeds };
