const express = require("express");

const router = express.Router();

const {rewriteResume} = require("../controllers/resumeRewriteController");


router.post("/resume-rewrite",rewriteResume);


module.exports = router;