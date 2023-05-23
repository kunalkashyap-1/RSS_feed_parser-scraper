const express = require("express");
const router = express.Router();
const {
  search,
  feeds,
  category_feeds,
} = require("../controllers/toiControllers");

router.route("/search/:path").get(search);
router.route("/feeds/:path").get(feeds);
router.route("/category/:path").get(category_feeds);

module.exports = router;
