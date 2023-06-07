const http = require('http');
const os = require('os');

const listenPort = 8080;

server_name = 'Generic Server';
if ('SERVER_NAME' in process.env) {
  server_name = process.env.SERVER_NAME;
}

console.log(server_name+' v1 starting on host '+os.hostname()+' port '+listenPort+'...');

const server = http.createServer((req, res) => {
  let clientIP = req.connection.remoteAddress;
  console.log('Processing request for '+req.url+' from '+clientIP);
  res.writeHead(200);
  res.end('Hello '+clientIP+', this is '+server_name+' v1 on '+os.hostname()+'\n');
});

server.listen(listenPort);
