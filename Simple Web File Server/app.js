var http = require("http");
var fs = require('fs');

http.createServer(function(req,res)
{
	var kode = 0;
	var file = "";
	if(req.url == "/"){
		file = "index.html";
		kode = 200;
	}else if(req.url == "/contact"){
		file = "contact.html";
		kode = 200;
	}else{
		file = "404.html";
		kode = 404;
	}
	res.writeHead(kode,{"Content_Type" : "text/html"});
	fs.createReadStream('./template/' + file).pipe(res);
}).listen(8888);

console.log("Server Is Running...")