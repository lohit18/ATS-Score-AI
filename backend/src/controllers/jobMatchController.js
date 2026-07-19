const { compareResumeWithJD } = require("../services/groqService");


const compareResume = async (req, res) => {

    try {

        const { resumeText, jobDescription } = req.body;


        if (!resumeText || !jobDescription) {

            return res.status(400).json({

                success: false,
                message: "Resume text and Job Description are required."

            });

        }


        const payload = {

            resumeText,
            jobDescription

        };


        const result = await compareResumeWithJD(payload);

        res.status(200).json({
            success:true,
            data: result
        });


    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


module.exports = {
    compareResume
};