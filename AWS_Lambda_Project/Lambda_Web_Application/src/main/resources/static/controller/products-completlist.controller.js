awsdemo.controller('productsListController', function(productsListService,$scope) {
	
	$scope.showSpinner = true;
	$scope.loadData = function() {
		 productsListService.getfullProducts(function(data){
		        $scope.productsList = data.items;
		        $scope.showSpinner = false;
		        console.log("result::"+data);
		    })
	}

});


