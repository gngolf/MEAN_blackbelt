var mongoose 	= require('mongoose'),
	express 	= require('express'),
	bodyParser 	= require('body-parser'),
	path 		= require('path'),
	app 		= express();

app.use(bodyParser.json())

app.use(express.static('client'));
app.use(express.static('bower_components'));

require('./config/mongoose.js');
require('./config/routes.js')(app);

app.listen(8000, function() {
	console.log('listening on port 8000');
});
