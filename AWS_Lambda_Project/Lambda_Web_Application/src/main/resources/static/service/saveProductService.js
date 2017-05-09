awsdemo.service('saveProductService', function($http,$rootScope) {

this.saveProduct = function(productInput,callback){
    var responsePromise = 	 $http({	
        url: 'https://pr7w5v87p0.execute-api.us-east-1.amazonaws.com/dev/savenewproduct',
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