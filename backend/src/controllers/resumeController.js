const Resume = require("../models/Resume");

const extractPdfText = require("../services/pdfService");

const {
  compareResumeWithJD
} = require("../services/groqService");

const {
  rewriteResume
} = require("../services/resumeRewriteService");

const {
  generateInterviewQuestions
} = require("../services/interviewService");



const createResume = async (req, res) => {

  try {

    const resume = await Resume.create(req.body);

    res.status(201).json({
      success: true,
      resume,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};



const uploadResume = async (req, res) => {

  try {

    console.log("📄 FILE RECEIVED:");
    console.log(req.file);

    const {
      jobDescription,
      role
    } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume PDF is required."
      });
    }

    if (!jobDescription || !role) {
      return res.status(400).json({
        success: false,
        message: "Job Description and Role are required."
      });
    }

    console.log("1️⃣ Starting PDF extraction");

    const resumeText = await extractPdfText(req.file.path);

    console.log("2️⃣ PDF extracted successfully");
    console.log("Extracted text length:", resumeText.length);

    const payload = {
      resumeText,
      jobDescription,
      role
    };

    console.log("3️⃣ Comparing Resume with Job Description...");

    const atsAnalysis =
      await compareResumeWithJD(payload);

    console.log("✅ ATS Analysis Completed");

    console.log("4️⃣ Rewriting Resume...");

    const resumeRewrite =
      await rewriteResume(payload);

    console.log("✅ Resume Rewrite Completed");

    console.log("5️⃣ Generating Interview Questions...");

    const interviewQuestions =
      await generateInterviewQuestions(payload);

    console.log("✅ Interview Questions Generated");

    // Save uploaded resume only
    await Resume.create({

      fileName: req.file.filename,

      extractedText: resumeText

    });

    console.log("6️⃣ Resume Saved");

    return res.status(200).json({

      success: true,

      data: {

        atsAnalysis,

        resumeRewrite,

        interviewQuestions

      }

    });

  } catch (error) {

    console.log("❌ ERROR OCCURRED");
    console.log(error);

    return res.status(500).json({

      success: false,

      message: error.message

    });

  }

};



module.exports = {

  createResume,

  uploadResume

};