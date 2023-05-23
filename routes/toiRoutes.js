const express = require("express");
const router = express.Router();
const {
  search,
  feeds,
} = require("../controllers/toiControllers");

router.route("/search/:path").get(search);
router.route("/feeds/:path").get(feeds);

module.exports = router;
