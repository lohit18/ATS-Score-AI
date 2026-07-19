# 🚀 ResumeCraft AI

An AI-powered resume optimization and interview preparation platform built using the **MERN Stack** and **Groq LLM**.

ResumeCraft AI analyzes resumes against job descriptions, generates ATS compatibility scores, identifies missing skills, improves resume content, and creates personalized interview questions using Generative AI.

---

# 📖 Project Overview

ResumeCraft AI helps job seekers improve their chances of getting shortlisted by understanding how their resume matches a specific job requirement.

The application extracts text from uploaded PDF resumes, analyzes the resume using AI, compares it with job descriptions, provides optimization suggestions, rewrites resume sections, and prepares candidates for interviews.

This project demonstrates the integration of:

- React
- Node.js
- Express.js
- MongoDB
- PDF Processing
- Prompt Engineering
- Generative AI (Groq LLM)

to build a real-world AI-powered career assistant.

---

# ✨ Features

## 📄 Resume Analysis

- Upload resume in PDF format
- Extract resume content automatically
- Generate AI-powered ATS score
- Detect technical skills
- Identify missing skills
- Provide improvement suggestions

## 🎯 Resume vs Job Description Matching

- Compare resume with target job description
- Calculate keyword matching percentage
- Find matching skills
- Identify missing keywords
- Analyze experience compatibility
- Suggest suitable job roles

## ✍️ AI Resume Rewrite

- Generate improved professional summary
- Rewrite experience points using stronger action verbs
- Add ATS-friendly keywords
- Suggest skills to learn
- Improve resume readability

## 🎤 AI Interview Preparation

Generate personalized interview questions based on:

- Resume experience
- Job description
- Target role

Includes:

- Technical questions
- Project-based questions
- HR interview questions

## ⚡ Other Features

- Responsive React UI
- Secure PDF upload
- AI-generated structured JSON responses
- REST API architecture
- MongoDB database integration

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Multer
- pdf-parse
- dotenv

## Artificial Intelligence

- Groq API
- Llama 3.3 70B Versatile Model
- Prompt Engineering

---

# 🏗️ System Architecture

                     User
                      │
                      ▼
              React Frontend
                      │
                      ▼
              Express.js API
                      │
          Upload Resume PDF + JD
                      │
                      ▼
             PDF Text Extraction
                      │
                      ▼
                Groq LLM API
                      │
    ┌─────────────────┼─────────────────┐
    ▼                 ▼                 ▼

    ATS Analysis Resume Rewrite Interview Generator

    │                 │                 │

    └─────────────────┼─────────────────┘
                      │
                      ▼

             Structured JSON Response

                      │
                      ▼

            React Result Dashboard

---

# 📂 Project Structure

ResumeCraft-AI

│
├── frontend
│ ├── src
│ │ ├── components
│ │ ├── services
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── package.json
│
├── backend
│ ├── config
│ ├── controllers
│ ├── middleware
│ ├── models
│ ├── routes
│ ├── services
│ │ ├── prompts
│ │ ├── groqService.js
│ │ ├── resumeRewriteService.js
│ │ └── interviewService.js
│ │
│ ├── uploads
│ ├── app.js
│ ├── server.js
│ └── package.json
│
└── README.md

---

# 🚀 Getting Started

## 1️⃣ Clone Repository

```bash
git clone https://github.com/lohit18/ResumeCraft-AI.git

cd ResumeCraft-AI

2️⃣ Backend Setup

Navigate to backend:

cd backend

npm install

Create .env file:

PORT=5000

MONGODB_URI=your_mongodb_connection_string

GROQ_API_KEY=your_groq_api_key

Start backend:

npm run dev

Backend runs on:

http://localhost:5000

3️⃣ Frontend Setup

Open another terminal:

cd frontend

npm install

npm run dev

Frontend runs on:

http://localhost:5173

📡 API Flow

Resume Analysis API
POST /api/resumes/upload

Uploads resume PDF and returns AI-generated analysis.

Job Matching API

Input:

Resume Text
+
Job Description
+
Role

Output:

{
 "atsScore":80,
 "matchedSkills":[
    "React",
    "Node.js",
    "MongoDB"
 ],
 "missingSkills":[
    "Docker"
 ],
 "suggestions":[
    "Improve backend experience"
 ]
}
Resume Rewrite Output

Example:

{
 "improvedSummary":
 "Full Stack Developer experienced in MERN applications",

 "optimizedKeywords":[
    "React",
    "Node.js",
    "MongoDB"
 ],

 "recommendedSkillsToLearn":[
    "Docker"
 ]
}


Interview Preparation Output

Generates:

Technical Questions

Project Questions

HR Questions

based on resume and job requirements.


✍️ Resume Rewrite

(Add Screenshot)

🎤 Interview Preparation


📚 What I Learned

Through this project I gained practical experience in:

Building full-stack MERN applications
Designing REST APIs
PDF text extraction
File upload handling
MongoDB and Mongoose
Prompt Engineering
Large Language Model integration
Structured AI responses
Generative AI application development
React component architecture
API communication using Axios
Deploying full-stack applications
👨‍💻 Author

Lohit Kumar

GitHub:

https://github.com/lohit18

⭐ Support

If you find ResumeCraft AI useful, consider giving the repository a ⭐.

It helps support future improvements and AI-powered projects.
```
