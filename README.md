# 🚀 ATS Score AI

An AI-powered Resume ATS (Applicant Tracking System) Analyzer built using the **MERN Stack** and **Groq LLM**. Upload your resume in PDF format and instantly receive an AI-generated ATS score, detected skills, missing skills, recommended job roles, and personalized suggestions to improve your resume.

---

## 📖 Project Overview

ATS Score AI helps job seekers evaluate how well their resumes align with modern recruitment systems. The application extracts text from uploaded PDF resumes, sends it to an AI model for analysis, and presents actionable insights in a clean and intuitive interface.

This project demonstrates the integration of **React**, **Node.js**, **Express.js**, **MongoDB**, and **Generative AI** to build a real-world full-stack application.

---

## ✨ Features

- 📄 Upload Resume (PDF)
- 🤖 AI-powered Resume Analysis
- 📊 ATS Score Generation
- 💻 Technical Skills Detection
- ❌ Missing Skills Identification
- 🎯 Recommended Job Roles
- 💡 Personalized Resume Improvement Suggestions
- ⚡ Fast and Responsive User Interface
- 📁 Secure File Upload using Multer
- 🗄️ MongoDB Integration

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Multer
- pdf-parse
- dotenv

### AI

- Groq API
- Llama 3.3 70B Versatile Model

---

## 🏗️ System Architecture

```text
                    User
                      │
                      ▼
              React Frontend
                      │
          Upload Resume (PDF)
                      │
                      ▼
              Express.js API
                      │
          Multer File Upload
                      │
                      ▼
             PDF Text Extraction
                  (pdf-parse)
                      │
                      ▼
                Groq LLM API
                      │
                      ▼
             AI Resume Analysis
                      │
                      ▼
                 MongoDB Atlas
                      │
                      ▼
          Analysis Response (JSON)
                      │
                      ▼
             React Result Dashboard
```

---

## 📂 Project Structure

```text
ATS-Score-AI
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── uploads
│   ├── app.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/lohit18/ATS-Score-AI.git

cd ATS-Score-AI
```

---

### 2️⃣ Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

GROQ_API_KEY=your_groq_api_key
```

Run the backend server

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

Open a new terminal.

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

Backend runs on:

```text
http://localhost:5000
```

---

## 📡 API Endpoint

### Upload Resume

```http
POST /api/resumes/upload
```

**Request**

Form Data

| Key    | Type     |
| ------ | -------- |
| resume | PDF File |

**Response**

```json
{
  "success": true,
  "analysis": {
    "atsScore": 86,
    "skills": ["React", "Node.js", "MongoDB"],
    "missingSkills": ["Docker", "TypeScript"],
    "recommendedRoles": ["Frontend Developer", "MERN Stack Developer"],
    "suggestions": ["Learn Docker", "Improve GitHub Projects"]
  }
}
```

---

## 📸 Screenshots

> Add screenshots here after uploading them.

### 🏠 Home Page

```
(Add Screenshot)
```

### 📄 Upload Resume

```
(Add Screenshot)
```

### 📊 Resume Analysis

```
(Add Screenshot)
```

---

## 🎯 Future Improvements

- 🔐 User Authentication (JWT)
- 📑 Resume History Dashboard
- 📌 Job Description Matching
- 📈 Skill Analytics & Charts
- 🌙 Dark Mode
- ☁️ Cloud Storage Integration
- 🚀 Project Deployment
- 📥 Download Analysis Report (PDF)

---

## 📚 What I Learned

This project helped me gain hands-on experience with:

- Building a full-stack MERN application
- REST API development
- File uploads using Multer
- PDF text extraction
- MongoDB & Mongoose
- Prompt Engineering
- Integrating Generative AI (Groq LLM)
- React State Management
- API communication using Axios
- End-to-End Application Development

---

## 👨‍💻 Author

**Lohit Kumar**

- GitHub: https://github.com/lohit18

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub. It helps others discover the project and motivates future improvements.
