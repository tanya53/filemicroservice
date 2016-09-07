'use strict';
console.log("we are in server.js");
var express = require('express');
var multer = require('multer');
var routes = require('../app/routes/index.js');
//var session = require('express-session');



var app = express();

require('dotenv').load();

app.use('/public',express.static(process.cwd()+'/public'));
app.use('/controllers',express.static(process.cwd()+'/controllers'));
app.use('/common',express.static(process.cwd()+'/common'));

var upload = multer({ dest: 'uploads/' });
console.log("upload ",upload);

//app.use(multer({dest:'./uploaded/'}).single('file'));

routes(app,upload);

var port = process.env.PORT || 8080;

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});