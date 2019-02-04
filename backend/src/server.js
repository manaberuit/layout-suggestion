const express = require('express');
const app = express();

app.use(express.static('../../frontend/dist/'));

app.get('/', (req, res) => {
    res.sendfile('../../frontend/dist/index.html');
});

const server = app.listen(3000, () => {
    console.log('listening to PORT:' + server.address().port);
});