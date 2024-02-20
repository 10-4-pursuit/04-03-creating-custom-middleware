const express = require('express');

const cors = require('cors');

const app = express();

const validateRequestData = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    if (req.body.isValid === false || req.body.isValid === undefined) {
        res.status(400).send("invalid request data");
    } else {
        next(); 
    }
}

app.use(cors());
app.use(express.json());
app.use(validateRequestData)

app.post('/validate-data', (req, res) => {
    console.log(req.body);
    res.status(200).send('data is valid')
})

module.exports = app;