const express = require("express");

const router = express.Router();

const {
  compareResume,
} = require("../controllers/jobMatchController");

router.post("/", compareResume);

module.exports = router;