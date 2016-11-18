var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (function(){
	return {
		add: function(req, res){
			var new_question = new Question(req.body);
			new_question.save(function(err, data){
				if(err){
					console.log(err);
					console.log('\nError saving new question');
				}else{
					res.redirect('/get_questions');
					// res.json(data);
				}
			})
		},
		show: function(req, res){
			Question.find({}, function(err, questions){
				if(err){
					console.log(err);
					console.log('\nError getting all questions');
				}else{
					res.json(questions);
				}
			})
		},
		one: function(req, res){
			Question.find({_id: req.params.id}, function(err, question){
				if(err){
					console.log(err);
					console.log('\nError getting question');
				}else{
					res.json(question);
				}
			})
		}
		// delete: function(req, res){
		// 	Customer.remove({_id: req.body._id}, function(err, data){
		// 		if(err){
		// 			console.log(err);
		// 			console.log('\nError removing customer');
		// 		}else{
		// 			res.redirect('/get_customers');
		// 		}
		// 	})
		// }
	}
})();