const express = require("express");
const app = express();

// app.use(validateRequestData);
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Save The Planet!");
});

//middleware
function validateRequestData (req, res, next) {
   console.log(req.body)
    const data = req.body; // Access the request body
    const { name, isValid } = data

    // Check if the property exists and meets the condition
    if (isValid) {
      next();
    } else {
      res.status(400).json({ message: "invalid request data", isValid});
    }

  };

//post route
app.post("/validate-data", validateRequestData, (req, res) => {
  res.status(200).json({ message: "data is valid"});
});

module.exports = app;
