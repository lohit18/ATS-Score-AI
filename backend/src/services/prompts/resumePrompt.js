const resumePrompt = (resumeText) => `

You are an expert ATS Resume Analyzer.

Analyze the resume below.

Return ONLY valid JSON.

{
  "skills": [],
  "missingSkills": [],
  "atsScore": 0,
  "recommendedRoles": [],
  "suggestions": []
}

Rules:

1. Extract all technical skills.

2. ATS Score must be an INTEGER between 0 and 100.

3. missingSkills MUST NOT be empty.

4. Recommend skills commonly expected
for modern software engineering roles.

Examples:

TypeScript
Docker
JWT
REST API
Redux
Next.js
Postman
Testing

5. recommendedRoles MUST NOT be empty.

6. suggestions MUST contain at least 3 items.

Resume:

${resumeText}

`;

module.exports = resumePrompt;