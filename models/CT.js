require('dotenv').config();
const mongoose = require('mongoose');

const DiffusionImages = new mongoose.Schema({

    MainTag: {
        type : String,
        require : true
    },
    MainTitle: {
        require:true,
        type: String
    },
    Desc:{
        require: true,
        type: String
    },
    Title : {
        type : String,
        require : true
    },
    ImageUrl : {
        type: String,
        require : true
    },
    DowloadUrl: {
        type: String,
        require:false
    },
    LikeCount: {
        require : false,
        type : Number,
        default: 0
    },
    MadeFor : {
        type : String,
        require : true
    },
    Tags: {
        require:true,
        type : String
    },
    PublicId: {
        require:true,
        type : String
    }
})

const CT = mongoose.model('DiffusionImages' , DiffusionImages);


module.exports = CT;