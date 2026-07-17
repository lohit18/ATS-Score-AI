const express = require("express");

const router = express.Router();

const {createResume, uploadResume} = require("../controllers/resumeController");

const upload = require("../middleware/uploadMiddleware");

router.post("/", createResume);

router.post(
  "/upload",
  (req, res, next) => {
    console.log("✅ Upload route reached");
    next();
  },
  upload.single("resume"),
  uploadResume
);

module.exports = router;