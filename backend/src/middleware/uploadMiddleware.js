const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Upload folder path
const uploadPath = path.join(
    __dirname,
    "../../uploads"
);

// Create uploads folder if it doesn't exist
if (!fs.existsSync(uploadPath)) {

    fs.mkdirSync(uploadPath, {
        recursive: true,
    });

}

// Configure storage
const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        console.log(
            "Saving file to:",
            uploadPath
        );

        cb(null, uploadPath);

    },

    filename: (req, file, cb) => {

        const fileName =
            Date.now() +
            "-" +
            file.originalname;

        console.log(
            "Filename:",
            fileName
        );

        cb(null, fileName);

    }

});

const upload = multer({
    storage,
});

module.exports = upload;