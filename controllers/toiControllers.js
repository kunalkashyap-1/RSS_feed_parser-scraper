const {
  getSearch,
  getFeeds,
  getCatFeeds,
} = require("../scraper_controller/toiScrappers");
const reqHandler = require("../configs/reqHandler");
const {toi} = require("../configs/links");

const search = async (req, res) => {
  const path = `${toi.search}${req.params.path}`;
  const amt = req.query.limit;
  // Call search_feeds function with path and limit, and handle the result with reqHandler
  getSearch(path)
    .then((result) => reqHandler(result, amt, res))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
};

const feeds = async (req, res) => {
  const path = req.params.path;
  const amt = req.query.limit;
  // Call feeds function with path and limit, and handle the result with reqHandler
  getFeeds(toi[path])
    .then((result) => reqHandler(result, amt, res))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
};

const category_feeds = async (req, res) => {
  const path = req.params.path;
  const amt = req.query.limit;
  // Call category_feeds function, and handle the result with reqHandler
  getCatFeeds(toi[path])
    .then((result) => reqHandler(result, amt, res))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
};

module.exports = { search, feeds, category_feeds };