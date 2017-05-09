awsdemo.controller('productsHomeController', function($scope,$state,$localStorage) {
	
	$scope.welcomeUser = localStorage.getItem('username');
	
	$scope.userRole = localStorage.getItem('userRole');
	
	$scope.logout = function(){
		localStorage.clear();
		$state.go("home")
		
	}

});


