require('dotenv').config();
const multer = require('multer')
const path = require('path');
const fs = require('fs');


// setting diractory
const tempDir = './public/temp';
if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
}

// setting storage
const storage = multer.diskStorage({
    destination: function(req , file , cb){
        // setting file path to store on server
        cb(null , tempDir);
    },
    filename: function(req , file ,cb){
        const ext = path.extname(file.originalname); // Get the file extension
        const fName = "Diffusion-" + Date.now() + "-" + Math.round(Math.random() * 1E9) + ext; // Generate unique filename
        cb(null, fName)
    }
})

const upload = multer({storage : storage})
module.exports = upload;