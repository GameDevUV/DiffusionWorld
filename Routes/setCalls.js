// routes folder
require('dotenv').config();
const express = require('express');
const routes = express.Router();
const {uploadrt} = require('../Calls/Api');
const getData = require('../Calls/ShareData');

// this is my middle ware
const upload = require('../Middleware/Multer.middleware')

routes.route('/').get(getData)
routes.route('/uploadrt').post(upload.single('image'), uploadrt);


module.exports = routes;