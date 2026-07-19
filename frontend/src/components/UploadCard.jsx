import { useRef, useState } from "react";
import api from "../services/api";

function UploadCard({ setAnalysis }) {

  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [role, setRole] = useState("");

  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const fileInputRef = useRef(null);

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  function handleBrowseClick() {
    fileInputRef.current.click();
  }

  function handleDragOver(event) {
    event.preventDefault();
    setDragActive(true);
  }

  function handleDragLeave() {
    setDragActive(false);
  }

  function handleDrop(event) {
    event.preventDefault();

    setDragActive(false);

    const droppedFile = event.dataTransfer.files[0];

    if (
      droppedFile &&
      droppedFile.type === "application/pdf"
    ) {
      setFile(droppedFile);
    }
  }

  async function handleUpload() {

    if (!file) {
      alert("Please select a PDF.");
      return;
    }

    if (!jobDescription.trim()) {
      alert("Please enter the Job Description.");
      return;
    }

    if (!role.trim()) {
      alert("Please enter the Role.");
      return;
    }

    try {

      setLoading(true);

      const formData = new FormData();

      formData.append("resume", file);
      formData.append("jobDescription", jobDescription);
      formData.append("role", role);

      const response = await api.post(
        "/resumes/upload",
        formData
      );

      setAnalysis(response.data.data);

    } catch (error) {

      console.log(error);

      alert("Analysis Failed");

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-xl p-10 text-center transition

        ${dragActive
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300"
          }`}
      >

        <p className="text-6xl">
          📄
        </p>

        <h2 className="text-2xl font-semibold mt-4">
          Upload Resume
        </h2>

        <p className="text-gray-500 mt-3">
          Drag & Drop your PDF here
        </p>

        <p className="my-4 text-gray-400">
          OR
        </p>

        <button
          onClick={handleBrowseClick}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Browse Files
        </button>

        <input
          type="file"
          accept=".pdf"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        {file && (

          <div className="mt-6">

            <p className="text-green-600 font-medium">
              ✅ {file.name}
            </p>

          </div>

        )}

      </div>

      {/* Job Description */}

      <div className="mt-8">

        <label className="block text-lg font-semibold mb-2">
          Job Description
        </label>

        <textarea
          rows="8"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste the Job Description here..."
          className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Role */}

      <div className="mt-6">

        <label className="block text-lg font-semibold mb-2">
          Target Role
        </label>

        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Example: MERN Stack Developer"
          className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      <button
        onClick={handleUpload}
        disabled={loading}
        className="mt-8 w-full bg-green-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
      >

        {
          loading
            ? "Analyzing Resume..."
            : "Analyze Resume"
        }

      </button>

    </div>

  );

}

export default UploadCard;