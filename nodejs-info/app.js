const http = require('http');
const nodeinfo = require('nodejs-info');
const morgan = require('morgan');
 
let logger = morgan('combined')

const server = http.createServer((req, res) => {
	logger(req, res, (err) => {
    	res.writeHead(200, { "Content-Type": "text/html" });
    	res.end(nodeinfo(req));
	});
});

server.listen(8080);