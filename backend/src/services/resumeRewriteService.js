const groq = require("../config/groq");

const rewritePrompt =
require("./prompts/rewritePrompt");


const rewriteResume = async (payload) => {

    try {

        const {
            resumeText,
            jobDescription
        } = payload;


        console.log(
            "Resume received:",
            resumeText.length
        );


        console.log(
            "Job Description received:",
            jobDescription.length
        );


        const completion = await groq.chat.completions.create({

            model:
            "llama-3.3-70b-versatile",


            temperature: 0.3,


            messages: [

                {

                    role: "user",

                    content:
                    rewritePrompt(
                        resumeText,
                        jobDescription
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

    rewriteResume

};