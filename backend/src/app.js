const express = require("express");
const cors = require("cors");

const app = express();

const resumeRoutes = require("./routes/resumeRoutes");
const jobMatchRoutes = require("./routes/jobMatchRoutes");
const resumeRewriteRoutes = require("./routes/resumeRewriteRoutes");
const interviewRoutes = require("./routes/interviewRoutes");
const analyzeResumeRoutes = require("./routes/analyzeResumeRoutes");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.use("/api/resumes", resumeRoutes);
app.use("/api/job-match", jobMatchRoutes);
app.use("/api", resumeRewriteRoutes);
app.use("/api/", interviewRoutes);
app.use("/api",analyzeResumeRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Server Running",
  });
});

module.exports = app;