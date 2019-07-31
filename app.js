//console.log("hello world");
/*
// for one time
setTimeout(function () {
	console.log("HELLO");
},3000);
*/


// for infinite time
/*
var time=0

setInterval(function(){
	time+=2;
	console.log(time+' seconds have passed');
}, 2000);

*/


// for clear the interval
/*
var time=0

var timer=setInterval(function(){
	time+=2;
	console.log(time+' seconds have passed');
	if(time==8)
	{
		clearInterval(timer);
	}
}, 2000);

*/

// create a server
var http=require('http');

var server=http.createServer(function(req,res){

    console.log('request made ' + req.url);
	res.writeHead(200,{'Content-Type' : 'text/plain'});
	res.end('Hello World');
});

server.listen(80,'localhost');
console.log('Now listening top port 3000');

/*

   //create read and writestream
    var fs=require('fs');
    var myReadStream=fs.createReadStream(__dirname+'/readme.txt','utf8');
    var myWriteStream=fs.createWriteStream(__dirname+'/writeme.txt','utf8');

    myReadStream.on('data', function(chunk){
    console.log('new chunk recieved: ');
    myWriteStream.write(chunk);


*/

/*
// response a file text
var http=require('http');
var fs=require('fs');

    

    var server=http.createServer(function(req,res){
    var myReadStream=fs.createReadStream(__dirname+'/readme.txt','utf8');
    var myWriteStream=fs.createWriteStream(__dirname+'/writeme.txt','utf8');
    console.log('request made ' + req.url);
	res.writeHead(200,{'Content-Type' : 'text/plain'});

	myReadStream.on('data', function(chunk){
    console.log('new chunk recieved: ');
    myWriteStream.write(chunk);
    res.end(chunk);
    });

	console.log('finish')
	
});

server.listen(3001,'localhost');
console.log('Now listening to port 3000');

*/
/*
// through pipe

var http=require('http');
var fs=require('fs');

    

    var server=http.createServer(function(req,res){
    var myReadStream=fs.createReadStream(__dirname+'/readme.txt','utf8');
    var myWriteStream=fs.createWriteStream(__dirname+'/writeme.txt','utf8');
    console.log('request made ' + req.url);
	res.writeHead(200,{'Content-Type' : 'text/plain'});

	myReadStream.pipe(res);

	console.log('finish')
	
});

// Write() is faster than pipe()

server.listen(3001,'localhost');
console.log('Now listening to port 3000');
server.listen(3001,'localhost');
console.log('Now listening to port 3000');

*/

/*
// send an html page to the client
var http=require('http');
var fs=require('fs');

    

    var server=http.createServer(function(req,res){
    var myReadStream=fs.createReadStream(__dirname+'/index.html','utf8');
    console.log('request made ' + req.url);
	res.writeHead(200,{'Content-Type' : 'text/html'});

	myReadStream.pipe(res);

	console.log('finish')
	
});

// Write() is faster than pipe()

server.listen(3001,'localhost');
console.log('Now listening to port 3000');
server.listen(3001,'localhost');
console.log('Now listening to port 3000');

*/

/*
// how to send a JSON 

var http=require('http');
var fs=require('fs');

    

    var server=http.createServer(function(req,res){
    console.log('request made ' + req.url);
	res.writeHead(200,{'Content-Type' : 'application/json'});

	var myObj={
		name: 'Sourav Bera',
		job: 'Devoloper',
		age: 29,
	};

	res.end(JSON.stringify(myObj));

	console.log('finish')
	
});

// Write() is faster than pipe()

server.listen(3001,'localhost');
console.log('Now listening to port 3000');
server.listen(3001,'localhost');
console.log('Now listening to port 3000');
*/
/*
var http=require('http');
var fs=require('fs');

    

    var server=http.createServer(function(req,res){
    console.log('request made ' + req.url);
	
	if(req.url==='/home' || req.url==='/')
	{
		res.writeHead(200,{'Content-Type': 'text/html'});
		fs.createReadStream(__dirname+'/index.html').pipe(res);
	}
	else if(req.url==='/contact')
	{
		res.writeHead(200,{'Content-Type': 'text/html'});
		fs.createReadStream(__dirname+'/contact.html').pipe(res);
	}
	else
	{
		res.writeHead(200,{'Content-Type': 'text/html'});
		fs.createReadStream(__dirname+'/notFound.html').pipe(res);
	}

	console.log('finish');

	});

	server.listen(3001,'localhost');
    console.log('Now listening to port 3000');
    server.listen(3001,'localhost');
    console.log('Now listening to port 3000');
    */