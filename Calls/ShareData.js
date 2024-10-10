const mongoose = require('mongoose');
const connectDb = require('../Connect/connectDb');
const CT = require('../models/CT')

const data =CT.find({})

const getData = async (req , resp)=>{
    try {
        const Walldata = await data.find({});
        resp.send(Walldata);
    } catch (error) {
        console.log(error);
    }
}

module.exports = getData;