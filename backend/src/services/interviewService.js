const groq = require("../config/groq");

const interviewPrompt =
require("./prompts/interviewPrompt");


const generateInterviewQuestions = async (payload) => {

    try {

        const {
            resumeText,
            jobDescription,
            role
        } = payload;


        console.log(
            "Resume received:",
            resumeText.length
        );


        console.log(
            "Job Description received:",
            jobDescription.length
        );


        console.log(
            "Role received:",
            role
        );


        const completion =
        await groq.chat.completions.create({

            model:
            "llama-3.3-70b-versatile",


            temperature: 0.4,


            messages: [

                {

                    role: "user",

                    content:
                    interviewPrompt(
                        resumeText,
                        jobDescription,
                        role
                    )

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


    } catch(error) {

        throw error;

    }

};



module.exports = {

    generateInterviewQuestions

};