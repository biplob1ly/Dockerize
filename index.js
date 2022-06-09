const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('A sample text!');
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});