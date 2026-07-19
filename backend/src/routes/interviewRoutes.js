const express = require("express");

const router = express.Router();


const {
    generateInterviewQuestions
} = require("../controllers/interviewController");



router.post(
    "/interview-questions",
    generateInterviewQuestions
);



module.exports = router;