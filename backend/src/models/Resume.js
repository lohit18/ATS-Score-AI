const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({

    fileName: {

        type: String,

        required: true,

    },

    extractedText: {

        type: String,

        required: true,

    },

    skills: [

        String

    ],

    atsScore: {

        type: Number,

        default: 0,

    },

    missingSkills: [

        String

    ],

    recommendedRoles: [

        String

    ],

    suggestions: [

        String

    ]

},
{

    timestamps:true

});

module.exports =
mongoose.model(
    "Resume",
    resumeSchema
);