awsdemo.controller('productsSearchController', function(searchProductsService,$scope) {
	
	$scope.loadPage = function(){
		$scope.searchResult = "start";
	}
	
	$scope.searchProduct = function(){
		$scope.showSpinner = true;
		searchProductsService.searchProduct($scope.productID,function(data){
			$scope.searchResult = data.items;
			$scope.showSpinner = false;
		})
	}
	
});


