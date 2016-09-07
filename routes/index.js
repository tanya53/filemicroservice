'use strict';

var path = process.cwd();


module.exports = function (app,upload) {

	//var clickHandler = new ClickHandler();

	app.route('/').get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

    app.post('/uploadFile/',upload.single('file'),function(req,res){
    	console.log("in the upload section");
    	var size = req.file.size;
    	console.log("size ",req.file.size);
    	size = "file is "+req.file.size + " bytes";
    	res.send(JSON.stringify(size));
    
    });


    	
   
	//app.route('/latest/')
    //    .get(clickHandler.retrieve);

	
	//app.route('/imagesearch/?')
	//   .get(clickHandler.imgSearch);
	   
	app.route('*')
	.get(function(req,res){
		console.log("we are lost");
		console.log(req.originalUrl);
		console.log(req.params[0]);
		res.end("what a waste of time");
	});
};