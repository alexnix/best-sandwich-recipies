app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/best");
	$stateProvider
	.state('best', {
		url:'/best',
		controller:'bestCtrl',
		templateUrl:'views/best.html',
	})
	.state('make', {
		url:'/make/',
		controller:'makeCtrl',
		templateUrl:'views/make.html',
	})
	.state('add', {
		url:'/add',
		controller:'addCtrl',
		templateUrl:'views/add.html',
	});
});