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
  
  if (path !== 'top_stories' && path !== 'latest_feeds' && path !== 'most_read' && path !== 'most_shared') {
    getCatFeeds(toi[path])
      .then((result) => reqHandler(result, amt, res))
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  } else {
    getFeeds(toi[path])
      .then((result) => reqHandler(result, amt, res))
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  }
};


module.exports = { search, feeds};