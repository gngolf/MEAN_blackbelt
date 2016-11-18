var path = require('path')

var questions = require('../server/controllers/questions.js')
var answers = require('../server/controllers/answers.js')

module.exports = function(app){
	app.post('/create_question', function(req, res){
		questions.add(req, res);
	})
	app.get('/get_questions', function(req, res){
		questions.show(req, res);
	})
	app.get('/show/:id', function(req, res){
		questions.one(req, res);
	})
	// app.post('/delete_customer', function(req, res){
	// 	customers.delete(req, res);
	// })
	app.post('/create_answer', function(req, res){
		answers.add(req, res);
	})
	app.get('/get_answers', function(req, res){
		answers.show(req, res);
	})
	// app.post('/delete_order', function(req, res){
	// 	orders.delete(req, res);
	// })

}