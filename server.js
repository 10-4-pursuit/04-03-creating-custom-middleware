const app = require('./index.js');

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`Server is listening on port ${PORT}`);
});