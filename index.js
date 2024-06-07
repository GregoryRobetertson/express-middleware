'use strict';

const express = require('express');
const {logoutRequest, requestHeaders} = require('./src/middleware');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3002

app.use(bodyParser.json());


app.get('/',logoutRequest, (req, res, next) => {
    console.log('Hello, World!')
    res.send('Hello, World!')
})

app.post('/contact', requestHeaders, (req, res, next) => {
    console.log(req.body);
     res.json(req.body);
} )



app.listen(PORT, () => {
    console.log('Server is running on port' + PORT);
});