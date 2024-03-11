const express = require('express');
const app = express();

const validateRequestData = (req, res, next) => {
    const isValid = req.body.isValid;
    if (isValid === true) {
        next();
    } else {
        res.status(400).send('invalid request data');
    }
};

app.use(express.json());

app.post('/validate-data', validateRequestData, (req, res) => {
    res.status(200).send('data is valid');
});

module.exports = app;