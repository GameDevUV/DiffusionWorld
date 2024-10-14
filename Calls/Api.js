require('dotenv').config();
const {UploadOnCloudinary, getCloudinaryFileUrl} = require('../Utility/cloudinary')
const CT = require('../models/CT')


const uploadrt = async (req, resp) => {
    try {
        const imageName = req.body.name;
        const DeviceKnow = req.body.DeviceKnow;
        const WallTags = req.body.WallTags;
        const WallTitle = req.body.WallTitle;
        const btags = req.body.btags;

        const uploadResult = await UploadOnCloudinary(req.file.path);
        if (!uploadResult) {
            return resp.json({ message: "unable to upload" })
        }
        
        const Imageurl = uploadResult.url;
        const PublicId = uploadResult.publicId;
        const downloadUrl = await getCloudinaryFileUrl(PublicId);
        const newImage = new CT({
            Title: imageName,
            ImageUrl: Imageurl,
            DowloadUrl: downloadUrl,
            MadeFor: DeviceKnow,
            MainTag: WallTags,
            MainTitle: WallTitle,
            Tags: btags,
            PublicId : PublicId
        })
        await newImage.save();
        resp.status(200).json({ message: "file uploaded sucessfully" });
    } catch (error) {
        console.log("error in Cloudinary upload -->", error);
    }
}

module.exports = { uploadrt };