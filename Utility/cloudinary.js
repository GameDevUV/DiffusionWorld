require('dotenv').config()
const  cloudinary = require('cloudinary').v2;
const fs = require('fs')


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    })


//fs optimization

 const UploadOnCloudinary= async (FilePath)=>{
    try {
        if(!FilePath) {
            console.log("Null Path")
            return null;
        }
        const UploadVar = await cloudinary.uploader.upload(FilePath)
        console.log(UploadVar);
        fs.unlinkSync(FilePath)
        const url = UploadVar.url;
        const publicId = UploadVar.public_id;
        return{url: url , publicId : publicId};
        
    } catch (error) {
        console.log("Upload error -->"  , error);
        fs.unlinkSync(FilePath);//deleting the local temp file from server if upload faield
        return null;
    }
}

const getCloudinaryFileUrl = (publicId) => {
    const url = cloudinary.url(publicId, {
        secure: true  // to get https URL
    });
    return url;
}

module.exports ={ UploadOnCloudinary , getCloudinaryFileUrl};