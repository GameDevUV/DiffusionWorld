require('dotenv').config();
const mongoose = require('mongoose');

const connectDb = async ()=>{
    await mongoose.connect(process.env.ATLAS_LINK)
    
    const db = mongoose.connection;
    
}

module.exports = connectDb;