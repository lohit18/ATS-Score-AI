const groq = require("../config/groq");

const resumePrompt =
require("./prompts/resumePrompt");

const analyzeResume =
async (resumeText) => {

    const completion =
    await groq.chat.completions.create({

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

module.exports =
analyzeResume;