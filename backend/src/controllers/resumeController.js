const Resume = require("../models/Resume");

const extractPdfText = require("../services/pdfService");

const analyzeResume = require("../services/groqService");


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


    console.log("1️⃣ Starting PDF extraction");


    const text = await extractPdfText(
      req.file.path
    );


    console.log("2️⃣ PDF extracted successfully");

    console.log(
      "Extracted text length:",
      text.length
    );


    console.log("3️⃣ Sending text to Groq");


    const aiAnalysis = await analyzeResume(
      text
    );


    console.log("4️⃣ Groq response received");

    console.log(aiAnalysis);



    const resume = await Resume.create({

      fileName: req.file.filename,

      extractedText: text,

      skills: aiAnalysis.skills,

      atsScore: aiAnalysis.atsScore,

      missingSkills: aiAnalysis.missingSkills,

      recommendedRoles: aiAnalysis.recommendedRoles,

      suggestions: aiAnalysis.suggestions,

    });



    console.log("5️⃣ Saved to MongoDB");



    res.status(201).json({

      success: true,

      analysis: {

        atsScore: resume.atsScore,

        skills: resume.skills,

        missingSkills: resume.missingSkills,

        recommendedRoles: resume.recommendedRoles,

        suggestions: resume.suggestions,

      },

    });


  } catch (error) {


    console.log("❌ ERROR OCCURRED");

    console.log(error);


    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};



module.exports = {

  createResume,

  uploadResume,

};