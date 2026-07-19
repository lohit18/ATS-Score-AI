const express = require("express");

const router = express.Router();


const {
    analyzeResumeController
} = require("../controllers/analyzeResumeController");


router.post(
    "/analyze-resume",
    analyzeResumeController
);


module.exports = router;