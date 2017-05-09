awsdemo.controller('DeleteProductController', function(deleteProductService,$scope) {
	
	$scope.deleteProductItem = function(){
		$scope.showSpinner = true;
		deleteProductService.deleteProduct($scope.productID,function(data){
			$scope.searchResult = data;
			$scope.showSpinner = false;
			alert("Product Sucessfully Deleted from Dynamo Table.");
			$scope.productID = "";
			console.log(data);
		})
	}
});


