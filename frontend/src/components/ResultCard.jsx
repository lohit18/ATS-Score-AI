function ResultCard({ analysis }) {

  if (!analysis) return null;


  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-2xl shadow-lg p-8">


      <h2 className="text-3xl font-bold text-center">
        Resume Analysis
      </h2>


      {/* ATS SCORE */}
      <div className="mt-6 text-center">

        <h3 className="text-xl font-semibold">
          ATS Score
        </h3>

        <p className="text-5xl font-bold text-green-600 mt-2">
          {analysis.atsScore}%
        </p>

      </div>



      {/* SKILLS */}
      <div className="mt-8">

        <h3 className="text-xl font-semibold">
          Skills Found
        </h3>

        <div className="flex flex-wrap gap-2 mt-3">

          {
            analysis.skills.map((skill,index)=>(
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))
          }

        </div>

      </div>



      {/* MISSING SKILLS */}
      <div className="mt-8">

        <h3 className="text-xl font-semibold">
          Missing Skills
        </h3>

        <div className="flex flex-wrap gap-2 mt-3">

          {
            analysis.missingSkills.map((skill,index)=>(
              <span
                key={index}
                className="bg-red-100 text-red-700 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))
          }

        </div>

      </div>



      {/* RECOMMENDED ROLES */}
      <div className="mt-8">

        <h3 className="text-xl font-semibold">
          Recommended Roles
        </h3>


        <ul className="mt-3 space-y-2">

          {
            analysis.recommendedRoles.map((role,index)=>(
              <li
                key={index}
                className="bg-green-100 text-green-700 px-4 py-2 rounded-lg"
              >
                {role}
              </li>
            ))
          }

        </ul>

      </div>




      {/* SUGGESTIONS */}
      <div className="mt-8">

        <h3 className="text-xl font-semibold">
          Suggestions
        </h3>


        <ul className="mt-3 space-y-2">

          {
            analysis.suggestions.map((suggestion,index)=>(
              <li
                key={index}
                className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg"
              >
                {suggestion}
              </li>
            ))
          }

        </ul>

      </div>


    </div>
  );
}


export default ResultCard;