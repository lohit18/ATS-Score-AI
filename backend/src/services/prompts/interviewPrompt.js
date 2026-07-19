const interviewPrompt = (
    resumeText,
    jobDescription,
    role
) => {


return `

You are an expert technical interviewer.

Your task is to generate interview questions
for the candidate based on their resume and
the target job description.


Candidate Resume:

${resumeText}


Job Description:

${jobDescription}


Target Role:

${role}



Generate questions in the following categories:

1. Technical Questions
2. Project Based Questions
3. HR Questions



Return ONLY valid JSON.

Use this exact structure:


{
    "technicalQuestions": [
        {
            "question": "",
            "difficulty": ""
        }
    ],


    "projectQuestions": [
        {
            "question": ""
        }
    ],


    "hrQuestions": [
        {
            "question": ""
        }
    ]
}



Rules:

- Questions must be relevant to the candidate resume.
- Questions must match the job description.
- Do not ask about technologies not present in the resume unless they are mentioned in the job description.
- Generate realistic interview questions.
- Do not include markdown.
- Return only JSON.

`;

};


module.exports = interviewPrompt;