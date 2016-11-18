var mongoose = require('mongoose')

var fs = require('fs');
var path = require('path');

mongoose.connect('mongodb://localhost/blackbelt_db');
var models_path = path.join(__dirname, '../server/models')

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0){
		require(models_path + '/' + file);
	}
})