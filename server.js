const express = require('express');
const app = express();
const port = 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3024");
    next();
});

app.get('/', (req, res) => res.send({Hello: 'World'}));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
