const { generateInterviewQuestions: generateInterviewQuestionsService } = require("../services/interviewService");

const generateInterviewQuestions = async (req, res) => {

    try {

        const {
            resumeText,
            jobDescription,
            role
        } = req.body;



        if (!resumeText || !jobDescription || !role) {

            return res.status(400).json({

                success:false,

                message:
                "Resume text, Job Description and Role are required."

            });

        }



        const payload = {

    resumeText,

    jobDescription,

    role

};


const result =
await generateInterviewQuestionsService(payload);


res.status(200).json({

    success:true,

    data: result

});


    } catch(error) {

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};



module.exports = {

    generateInterviewQuestions

};