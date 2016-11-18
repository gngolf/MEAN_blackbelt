var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');

module.exports = (function(){
	return{
		add: function(req,res){
			var new_answer = new Answer(req.body);
			new_answer.save(function(err, data){
				if(err){
					console.log("didn't save answer");
				}else{
					res.redirect('/get_orders');
				}
			})
		},
		show: function(req, res){
			Answer.find({}, function(err, orders){
				if(err){
					console.log('Failed to get all answers');
				}else{
					res.json(answers);
				}
			})
		},
		// delete: function(req, res){
		// 	Order.remove({_id: req.body._id}, function(err, data){
		// 		if(err){
		// 			console.log(err);
		// 			console.log('\nError removing order');
		// 		}else{
		// 			res.redirect('/get_orders');	
		// 		}
		// 	})
		// }
	}
})();