'use strict';
var http = require('http');
var fs = require('fs');
var numberOfRequests = 0;
http.createServer(function (request, responce) {
    request.n = numberOfRequests;
    console.log('Request number ' + numberOfRequests + ' recioved!');
  
    setTimeout(function () {
        fs.readFile('app.js', function (err, contents) {
            responce.writeHead(200, {'Content-type':'text/plain'});
            responce.write(contents +"\n"+ request.n+"\n");
            console.log("Responce to the request# " + request.n);
            responce.end();
        });
        
    }, 2000);
   
    numberOfRequests++;
}
).listen(8080);
console.log('listening ...');

let a = 1;
let b = 2;
let c = 7;
let d = 3;
const mo = require('./math');
console.log(`Hello Matthew. The sum of a & b is ${mo.add(a, b)}`);
console.log(`Hello Matthew. The difference of c & d is ${mo.subtract(c, d)}`);