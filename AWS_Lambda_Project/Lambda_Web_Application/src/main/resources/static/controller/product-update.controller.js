awsdemo.controller('productUpdateController', function(updateProductService,searchProductsService,$scope) {
	
	$scope.lookupProduct = function() {
		$scope.showSpinner = true;
		
		searchProductsService.searchProduct($scope.productInput.productID,function(data){
			
			if(data.items === undefined){
				
			} else {
				$scope.showSpinner = false;
				var productInput = data.items[0];
				$scope.lookedup = true;
				$scope.productInput.productID = productInput.productID.s;
				$scope.productInput.price = productInput.Price.n;
				$scope.productInput.quantity = productInput.Quantity.n;
				$scope.productInput.model = productInput.productModel.s;
				$scope.productInput.productName = productInput.productName.s;
				$scope.productInput.category = productInput.Category.s;
			}
		})
	}

	$scope.updatebutton =function(){
		
		$scope.showSpinner = true;
		updateProductService.updateProduct($scope.productInput,function(data){
			$scope.showSpinner = false;
			alert("Product Data Updated Sucessfully");
			console.log("response:"+data);
			$scope.productInput = "";
		});
	}
});


