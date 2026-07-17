const express = require("express");
const cors = require("cors");

const app = express();

const resumeRoutes = require("./routes/resumeRoutes");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.use("/api/resumes", resumeRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Server Running",
  });
});

module.exports = app;