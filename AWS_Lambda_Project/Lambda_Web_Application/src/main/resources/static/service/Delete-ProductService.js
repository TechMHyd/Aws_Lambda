awsdemo.service('deleteProductService', function($http,$rootScope) {

this.deleteProduct = function(productID,callback){
    var responsePromise = 	 $http({	
        url: 'https://8u1ffj0orh.execute-api.us-east-1.amazonaws.com/dev/deleteproduct',
        method: "POST", // In this case it is POST
        data: productID,
        headers: { 
        	'Content-Type': 'application/json',
        	'Authorization': $rootScope.tokenId
        	
        	}
     });
        responsePromise.success(function(data, status, headers, config) {
            callback(data);
        });
        responsePromise.error(function(data, status, headers, config) {
            alert("AJAX failed! because no webservice is attached yet");
        });
}

});