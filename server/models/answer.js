var mongoose = require('mongoose');

var AnswerSchema = new mongoose.Schema({
	question_text: String,
	answer: String,
	description: String
	
});

mongoose.model('Answer', AnswerSchema)