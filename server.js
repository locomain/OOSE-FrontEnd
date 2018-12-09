const express = require('express');
const path = require ("path");
const server = express();
const port = 3000;

server.use('/', express.static(__dirname + '/dist'));
server.get('/', (req, res) => res.sendFile(path.join(__dirname+'/dist/index.html')));
server.listen(port, () => console.log(`Server listening on port ${port}!`));