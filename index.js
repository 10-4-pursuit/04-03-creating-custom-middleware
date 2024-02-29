const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

//Custom Middleware
const validateRequestData = (req, res, next) => {
    if (req.body.isValid) {
        next();
    } else {
        res.status(400).send(`error: invalid request data`);
    }
}

app.post('/validate-data', validateRequestData, (req, res, next) => {
    console.log(req.body);
    res.send('data is valid');
});


module.exports = app;