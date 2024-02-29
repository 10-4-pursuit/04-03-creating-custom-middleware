const app = require('./index');
const PORT = 3002;

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}/`);
});

module.imports = app;