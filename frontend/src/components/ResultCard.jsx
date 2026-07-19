function ResultCard({ analysis }) {

  if (!analysis) return null;

  const {
  atsAnalysis = {},
  resumeRewrite = {},
  interviewQuestions = {}
} = analysis;


const matchedSkills =
  atsAnalysis.matchedSkills || [];

const missingSkills =
  atsAnalysis.missingSkills || [];

const suggestions =
  atsAnalysis.suggestions || [];

const suitableRoles =
  atsAnalysis.roleFit?.suitableRoles || [];

const rewrittenExperience =
  resumeRewrite.rewrittenExperience || [];

const keywordsAdded =
  resumeRewrite.keywordsAdded ||
  resumeRewrite.optimizedKeywords ||
  [];
const recommendedSkillsToLearn =
  resumeRewrite.recommendedSkillsToLearn || [];

const technicalQuestions =
  interviewQuestions.technicalQuestions || [];

const projectQuestions =
  interviewQuestions.projectQuestions || [];

const hrQuestions =
  interviewQuestions.hrQuestions || [];

  return (

    <div className="max-w-6xl mx-auto mt-10 mb-10 space-y-8">

      {/* ATS ANALYSIS */}

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <h2 className="text-3xl font-bold text-center mb-8">
          📊 ATS Analysis
        </h2>

        <div className="text-center">

          <h3 className="text-xl font-semibold">
            ATS Score
          </h3>

          <p className="text-6xl font-bold text-green-600 mt-3">
            {atsAnalysis.atsScore}%
          </p>

        </div>

        <div className="mt-8">

          <h3 className="text-xl font-semibold">
            Match Summary
          </h3>

          <p className="mt-2 text-gray-700">
            {atsAnalysis.matchSummary}
          </p>

        </div>

        <div className="mt-8">

          <h3 className="text-xl font-semibold">
            Matched Skills
          </h3>

          <div className="flex flex-wrap gap-2 mt-3">

            {matchedSkills.map((skill, index) => (

              <span
                key={index}
                className="bg-green-100 text-green-700 px-3 py-1 rounded-full"
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

        <div className="mt-8">

          <h3 className="text-xl font-semibold">
            Missing Skills
          </h3>

          <div className="flex flex-wrap gap-2 mt-3">

            {missingSkills.map((skill, index) => (

              <span
                key={index}
                className="bg-red-100 text-red-700 px-3 py-1 rounded-full"
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

        <div className="mt-8">

          <h3 className="text-xl font-semibold">
            Recommended Roles
          </h3>

          <ul className="mt-3 space-y-2">

            {suitableRoles.map((role, index) => (

              <li
                key={index}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg"
              >
                {role}
              </li>

            ))}

          </ul>

        </div>

        <div className="mt-8">

          <h3 className="text-xl font-semibold">
            Suggestions
          </h3>

          <ul className="mt-3 space-y-2">

            {suggestions.map((item, index) => (

              <li
                key={index}
                className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg"
              >
                {item}
              </li>

            ))}

          </ul>

        </div>

      </div>

      {/* RESUME REWRITE */}

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <h2 className="text-3xl font-bold text-center mb-8">
          ✍ AI Resume Rewrite
        </h2>

        <div>

          <h3 className="text-xl font-semibold">
            Improved Summary
          </h3>

          <p className="mt-2 text-gray-700">
            {resumeRewrite.improvedSummary}
          </p>

        </div>

        <div className="mt-8">

          <h3 className="text-xl font-semibold">
            Rewritten Experience
          </h3>

          {rewrittenExperience.map((item, index) => (

            <div
              key={index}
              className="mt-4 p-4 border rounded-lg"
            >

              <p>
                <strong>Original:</strong>
              </p>

              <p className="text-gray-600">
                {item.original}
              </p>

              <p className="mt-3">
                <strong>Improved:</strong>
              </p>

              <p className="text-green-700">
                {item.improved}
              </p>

            </div>

          ))}

        </div>

        <div className="mt-8">

          <h3 className="text-xl font-semibold">
             Optimized Keywords
          </h3>

          <div className="flex flex-wrap gap-2 mt-3">

            {keywordsAdded.map((keyword, index) => (

              <span
                key={index}
                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full"
              >
                {keyword}
              </span>

            ))}

          </div>

        </div>

        <div className="mt-8">

          <h3 className="text-xl font-semibold">
            Recommended Skills to Learn
          </h3>

          <div className="flex flex-wrap gap-2 mt-3">

            {recommendedSkillsToLearn.map((skill, index) => (

              <span
                key={index}
                className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full"
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

      </div>

      {/* INTERVIEW QUESTIONS */}

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <h2 className="text-3xl font-bold text-center mb-8">
          🎯 AI Interview Questions
        </h2>

        <div>

          <h3 className="text-xl font-semibold">
            Technical Questions
          </h3>

          <ol className="list-decimal ml-6 mt-4 space-y-3">

            {technicalQuestions.map((item, index) => (

              <li key={index}>
                <strong>{item.difficulty.toUpperCase()}</strong> - {item.question}
              </li>

            ))}

          </ol>

        </div>

        <div className="mt-8">

          <h3 className="text-xl font-semibold">
            Project Questions
          </h3>

          <ol className="list-decimal ml-6 mt-4 space-y-3">

            {projectQuestions.map((item, index) => (

              <li key={index}>
                {item.question}
              </li>

            ))}

          </ol>

        </div>

        <div className="mt-8">

          <h3 className="text-xl font-semibold">
            HR Questions
          </h3>

          <ol className="list-decimal ml-6 mt-4 space-y-3">

            {hrQuestions.map((item, index) => (

              <li key={index}>
                {item.question}
              </li>

            ))}

          </ol>

        </div>

      </div>

    </div>

  );

}

export default ResultCard;