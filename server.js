var express = require('express'),
	app		= express();

app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/learning', express.static(__dirname + '/'));

app.listen(3000, function(){
	console.log('server started');
});