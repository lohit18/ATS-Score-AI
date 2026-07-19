const groq = require("../config/groq");

const resumePrompt =
require("./prompts/resumePrompt");



const analyzeResume = async (resumeText) => {

    const completion = await groq.chat.completions.create({

        model:
        "llama-3.3-70b-versatile",

        temperature: 0.3,

        messages: [

            {

                role: "user",

                content:
                resumePrompt(resumeText),

            }

        ]

    });


    const content =
    completion
    .choices[0]
    .message
    .content;


    const cleanedContent =
    content
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();


    return JSON.parse(
        cleanedContent
    );

};




// Resume vs Job Description Matching

const compareResumeWithJD = async (payload) => {

    try {

        const {
            resumeText,
            jobDescription
        } = payload;


        console.log("Resume received:", resumeText.length);

        console.log("Job Description received:", jobDescription.length);



        const prompt = `

You are an expert ATS Resume Analyzer.

Your job is to compare the candidate resume with the job description.

Analyze:

1. Overall ATS compatibility score.
2. Matching skills.
3. Missing skills.
4. Important keywords missing from resume.
5. Experience compatibility.
6. Suitable job roles.
7. Resume improvement suggestions.



Candidate Resume:

${resumeText}



Job Description:

${jobDescription}



Return ONLY valid JSON.

Use exactly this structure:


{
    "atsScore": number,

    "matchSummary": "",

    "matchedSkills": [],

    "missingSkills": [],

    "keywordAnalysis": {
        "matchedKeywords": [],
        "missingKeywords": [],
        "keywordMatchPercentage": number
    },

    "experienceMatch": {
        "status": "",
        "reason": ""
    },

    "roleFit": {
        "suitableRoles": []
    },

    "suggestions": []
}


Rules:

- Do not return markdown.
- Do not add explanations outside JSON.
- Score should be between 0-100.

`;



        const completion = await groq.chat.completions.create({

            model:
            "llama-3.3-70b-versatile",


            temperature: 0.3,


            messages: [

                {

                    role: "user",

                    content: prompt

                }

            ]

        });



        const content =
        completion
        .choices[0]
        .message
        .content;



        const cleanedContent =
        content
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();



        return JSON.parse(
            cleanedContent
        );


    } catch (error) {

        throw error;

    }

};



module.exports = {

    analyzeResume,

    compareResumeWithJD

};