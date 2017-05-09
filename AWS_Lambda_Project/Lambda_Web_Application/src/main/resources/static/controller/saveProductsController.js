awsdemo.controller('saveproductController', function(saveProductService,$scope) {
	
	$scope.productInput = {};
	$scope.savebutton = function(){
		$scope.showSpinner = true;
		saveProductService.saveProduct($scope.productInput,function(data){
			alert("New Product Data Saved Sucessfully");
			$scope.showSpinner = false;
			console.log("response:"+data);
			$scope.productInput = "";
		});
	}
});


