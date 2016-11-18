var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
	text: String,
	description: String
});

mongoose.model('Question', QuestionSchema);