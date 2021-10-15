const http = require('http');

const app = require('./app');

const port = 9000;


const server = http.createServer(app);

server.listen(port);
