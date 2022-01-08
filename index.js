const express = require('express');
const app = express();

const port = 80;

app.get('/', (req, res) => {
    res.status(200).send("ok");
    console.log('Ok!');
});

app.listen(port, ( req, res ) => {
    console.log('Serve listener');
} );
