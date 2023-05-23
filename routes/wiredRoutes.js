const express = require("express");
const router = express.Router();
const {
  feeds,
} = require("../controllers/wiredControllers");

router.route("/feeds/:path").get(feeds);

module.exports = router;
