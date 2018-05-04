var http = require("http");
var fs = require('fs');

http.createServer(function(req,res)
{
	res.writeHead(200,{"Content_Type" : "text/html"});
	fs.createReadStream('./template/index.html').pipe(res);
}).listen(8888);

console.log("Server Is Running...")