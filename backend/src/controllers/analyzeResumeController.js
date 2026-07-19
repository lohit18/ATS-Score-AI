const {
    compareResumeWithJD
} = require("../services/groqService");


const {
    rewriteResume
} = require("../services/resumeRewriteService");


const {
    generateInterviewQuestions
} = require("../services/interviewService");



const analyzeResumeController = async (req,res)=>{

    try {


        const {
            resumeText,
            jobDescription,
            role
        } = req.body;



        if(
            !resumeText ||
            !jobDescription ||
            !role
        ){

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



        const atsAnalysis =
        await compareResumeWithJD(payload);



        const resumeRewrite =
        await rewriteResume(payload);



        const interviewQuestions =
        await generateInterviewQuestions(payload);



        res.status(200).json({

            success:true,

            data:{

                atsAnalysis,

                resumeRewrite,

                interviewQuestions

            }

        });



    }
    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};



module.exports = {

    analyzeResumeController

};