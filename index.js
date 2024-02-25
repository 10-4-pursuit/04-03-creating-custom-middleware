const express = require('express');
const app = express();
const cors = require('cors');

const validateRequestData = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);

    if (!req.body.isValid || req.body.isValid !== true) { // Check for truthiness and equality
        res.status(400).send('invalid request data');
        return;
    } else {
        next();
    }
};

app.use(cors());
app.use(express.json());
app.use(validateRequestData);

app.post('/validate-data', (req, res) => {
    res.status(200).send('data is valid');
});

module.exports = app;