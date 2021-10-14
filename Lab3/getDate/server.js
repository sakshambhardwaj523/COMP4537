let http = require('http');
let url = require('url');

let date = require('../modules/utils')

http.createServer((req, res)=> {
    let q = url.parse(req.url, true);
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(
        "<p style= 'color:blue'>" +"Hello " +
          q.query["name"] +
          ". What a beautiful day. Server current date and time is " +
          date.getDate() + "</p>"
      );
  }).listen(8080);
console.log('listening ...');
