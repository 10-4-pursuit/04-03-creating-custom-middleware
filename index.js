// This is the file (index.js) where you would write up the custom middleware functions you create.

const express = require('express');
const app = express();

const validateRequestData = (req, res, next) => {
    if (req.body.isValid === true) {
        next();
    } else {
        res.status(400).json({ message: 'Invalid request data'});
    }
};

// Here we can set up the routes.

app.post('/validate-data', validateRequestData, (req, res) => {
    res.status(200).json({ message: 'Data is valid' });
});

module.exports = app;