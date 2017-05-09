awsdemo.service('updateProductService', function($http,$rootScope) {

this.updateProduct = function(productInput,callback){
    var responsePromise = 	 $http({	
        url: 'https://ghlpw9rqda.execute-api.us-east-1.amazonaws.com/dev/updateProduct',
        method: "POST", 
        data: productInput,
        headers:
        { 
        	'Content-Type': 'application/json',
        	'Authorization': $rootScope.tokenId
        	/*'Access-Control-Allow-Origin'  : '*',
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