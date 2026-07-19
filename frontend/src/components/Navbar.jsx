function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-200 bg-white">
      <h1 className="text-2xl font-bold text-blue-600">
        ResumeCraft AI
      </h1>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
        Analyze Resume
      </button>
    </nav>
  );
}

export default Navbar;