var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
	$routeProvider
		.when('/', {templateUrl: './partials/login.html'})
		.when('/questions', {templateUrl: './partials/questions.html'})
		.when('/show/:id', {templateUrl: './partials/show.html'})
		.when('/add_question', {templateUrl: './partials/newQuestion.html'})
		.when('/answer', {templateUrl: './partials/newAnswer.html'})

		.otherwise({redirectTo:'/'});
});


//factories
app.factory('QuestionsFactory', function($http){
	var factory = {};

	factory.create_question = function(info, callback){
		$http.post('/create_question', info).success(function(output){
			callback(output);
		})
	};

	factory.get_all = function(callback){
		$http.get('/get_questions').success(function(output){
			callback(output);
		})
	};
	factory.get_one = function(id, callback){
		$http.get('/show/:id').success(function(output){
			console.log(output);
			callback(output[0]);
		})
	}

	// factory.delete_customer = function(info, callback){
	// 	$http.post('/delete_customer', info).success(function(output){
	// 		callback(output);
	// 	})
	// }


	return factory;
})

app.factory('AnswersFactory', function($http){
	var factory = {};

	factory.get_answers = function(callback){
		var answers = [];
		callback(answers);
	}

	// factory.get_quantity = function(callback){
	// 	var quantity = [];

	// 	for (var i = 1; i<=100; i++){
	// 		quantity.push(i);
	// 	};
	// 	callback(quantity);
	// };

	factory.add_answer = function(info, callback){
		$http.post('/create_answer', info).success(function(data){
			callback(data);
		})
	}

	factory.get_answers = function(callback){
		$http.get('/get_answers').success(function(data){
			callback(data);
		})
	}

	// factory.delete_order = function(info, callback){
	// 	$http.post('/delete_order', info).success(function(output){
	// 		callback(output);
	// 	})
	// }
	

	return factory;
})



//controllers
app.controller('QuestionsController', function($scope, $routeParams, $location, QuestionsFactory){
	var id = $routeParams.id;
	$scope.addQuestion = function(){
		
		question = {
			text: $scope.new_question.text,
			description: $scope.new_question.description
		};
		QuestionsFactory.create_question(question, function(data){
			$scope.questions = data;
			$location.url('/questions');
		})
	}

	$scope.showQuestion = function(question){
		QuestionsFactory.get_one(function(data){
			$scope.questions = data;
		})
	}

	QuestionsFactory.get_all(function(data){
		$scope.questions = data;
	})

	
})


app.controller('AnswersController', function($scope, QuestionsFactory, AnswersFactory){
	
	QuestionsFactory.get_all(function(data){
		$scope.questions = data;
	})
	AnswersFactory.get_answers(function(data){
		$scope.answers = data;
	})
	// AnswersFactory.get_quantity(function(data){
	// 	$scope.quantity = data;
	// })
	AnswersFactory.get_answers(function(data){
		$scope.answers = data;
	})
	$scope.addAnswer = function(){
		AnswersFactory.add_answer($scope.new_answer, function(data){
			$scope.answers = data;
		})
	}

	// $scope.deleteOrder = function(order){
	// 	OrdersFactory.delete_order(order, function(data){
	// 		$scope.orders = data;
	// 	})
	// }
})
