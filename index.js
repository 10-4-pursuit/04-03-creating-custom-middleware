const express = require('express');
const app = express();

// Middleware
app.use(express.json());

//desc custom middleware to validate request data

const validateRequestData = (req, res, next) => {
    const { isValid } = req.body;
    if(isValid){
        next();
    } else {
        res.status(400).send('invalid request data');
    }
    
}

// desc route to validate request data

app.post('/validate-data', validateRequestData, (req, res) => {
    res.status(200).send('data is valid');
})

module.exports = app;



