#!/usr/bin/env node

var http = require('http'),
    url = require('url'),
    fs = require('fs'),
    mime = require('mime');

console.log('Starting listening on port 8888');

http.createServer(function(request, response) {
    console.log('Request for ' + request.url);
    var path = url.parse(request.url).pathname;
    if (path === '/') {
        path = '/index.html';
    }
    fs.readFile(__dirname + path, function(error, data) {
        if (error) {
            if (error.code === 'ENOENT') {
                response.writeHead(404);
                console.log('File not found: ', path);
                
                response.write('File not found: ' + path);
            } else {
                response.writeHead(500);
                response.write(error.message);
            }
        } else {
            response.writeHead(200, {'Content-Type': mime.lookup(path)});
            response.write(data);
        }
        response.end();
    });
}).listen(8888);
