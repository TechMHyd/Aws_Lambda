awsdemo.service('searchProductsService', function($http,$rootScope) {

this.searchProduct = function(productID,callback){
    var responsePromise = 	 $http({	
        url: 'https://3yznlsrs97.execute-api.us-east-1.amazonaws.com/dev/searchproduct',
        method: "POST", // In this case it is POST
        data: productID,
        headers: { 
        	'Content-Type': 'application/json',
        	'Authorization': $rootScope.tokenId
        /*	'Access-Control-Allow-Origin'  : '*',
			'Access-Control-Allow-Methods' : '*',
			'Access-Control-Allow-Headers' : '*'*/
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