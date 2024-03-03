const express = require('express');
const cors = require('cors');
const app = express();

const validateRequestData = (req, res, next) => {
    if (req.body.isValid) {
        next();
    } else {
        res.status(400).send('invalid request data');
    }
};

app.use(cors());
app.use(express.json());
app.post('/validate-data', validateRequestData, (req, res) => {
    res.status(200).send('data is valid');
});

module.exports = app