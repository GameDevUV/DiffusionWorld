require('dotenv').config();
const express = require('express');
const cors = require('cors')
const routes = require('./Routes/setCalls');
const connectDb = require('./Connect/connectDb')

const app = express();
app.use(cors());
app.use(express.json());

const conn = connectDb();

app.use('/' , routes);



app.listen(4200);