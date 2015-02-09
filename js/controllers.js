app.controller('bestCtrl', ['$scope', '$firebase', function($scope, $firebase){
	var ref = new Firebase("https://flickering-torch-7388.firebaseio.com/").child('sandwichs');

	$scope.list = $firebase(ref).$asArray();

}]);

app.controller('makeCtrl', ['$scope', '$firebase','$rootScope', function($scope, $firebase, $rootScope){
	$scope.animated = '';
	var ref = new Firebase("https://flickering-torch-7388.firebaseio.com/").child('sandwichs');
	var list = $firebase(ref).$asArray().$loaded(function(data){
		var len = data.length;
		$scope.sandwitch = data[Math.floor(Math.random()*data.length)];
		$scope.animated = "animated";
	});
	//$scope.sandwich = list[Math.floor(Math.random()*list.length)];
	//setTimeout(function(){},3000);


}]);

app.controller('addCtrl', ['$scope', '$firebase', '$state', function($scope, $firebase, $state){
	var ref = new Firebase("https://flickering-torch-7388.firebaseio.com/").child('sandwichs');

	$scope.sandwich = null;

	$scope.add = function(sandwich) {
		db = $firebase(ref).$asArray();
		db.$add({
			'name' : sandwich.name.replace(/(<([^>]+)>)/ig,""),
			'recipie' : sandwich.recipie.replace(/(<([^>]+)>)/ig,"").replace(/\r?\n/g, '<br />'),
			'chef' : '313125345435345',
		});
		$scope.sandwich = null;
		$state.go('best');
	}
}]);


app.controller('menuCtrl', ['$scope', '$state', function($scope, $state){
	$scope.checkState = function(newState) {
		if( newState == $state.$current )
			return "active";
		else
			return "";
	}
	$scope.reload = function() {
		$state.go($state.$current, null, { reload: true });
	}
}])