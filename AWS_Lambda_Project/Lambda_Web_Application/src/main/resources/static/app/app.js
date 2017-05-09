var awsdemo = angular.module('aws', ['ui.router', 'angularSpinner','ngRoute',
                                     'ui.bootstrap',
                                     'ngAnimate',
                                     'ngSanitize',
                                     'ngTouch',
                                     'ngStorage',
                                     'ui.router',
                                     'ui.mask']);

awsdemo.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/home");

    $stateProvider
        
        .state("register", {
            url: "/register",
            templateUrl: "views/register.html",
            controller: 'userRegisterController'
        })
        .state("login", {
            url: "/login",
            templateUrl: "views/login.html",
            controller: 'loginController'
        })
        
        .state("/loginerror", {
    	 		url: "/loginerror",
                templateUrl: 'views/loginerror.html'
            })
            
        .state("aws", {
            url: "/aws",
            templateUrl: "views/producsthome.html",
            controller: 'productsHomeController'
        })
        
        
        .state("aws.ProductList", {
            url: "/ProductList",
            templateUrl: 'views/ProductList.html',
            controller: 'productsListController'
        })
        .state("aws.ProductSearch", {
            url: "/ProductSearch",
            templateUrl: 'views/ProductSearch.html',
            controller: 'productsSearchController'
        })
        .state("aws.Productdelete", {
            url: "/Productdelete",
            templateUrl: 'views/Productdelete.html',
            controller: 'DeleteProductController'
        })
        .state("aws.Productupdate", {
            url: "/Productupdate",
            templateUrl: 'views/Productupdate.html',
            controller: 'productUpdateController'
        })

    .state("aws.SaveProduct", {
        url: "/SaveProduct",
        templateUrl: 'views/ProductInsert.html',
        controller: 'saveproductController'
    })
    
        .state("home", {
        url: "/home",
        templateUrl: "views/home.html"
    });
});

awsdemo.run(function($rootScope) {
        $rootScope.delready = {};
        $rootScope.delready.selecteItemsArray = [];
        $rootScope.delready.selecteItemsArray1 = [];
        $rootScope.delready.selecteItemsArrayLength = 0;
        $rootScope.userName;
        $rootScope.pdStartDate;
        $rootScope.pdStartDate1;
    })

awsdemo.constant('restAPI_url', null)

//normal User pool
awsdemo.constant('aws_config', {
    userPoolId: 'us-east-1_P8Tghqyud',
    appClientId: '493o3rsbregssd2vj7iuvbcqje',
    identityPoolId: 'us-east-1:883587243396:userpool/us-east-1_P8Tghqyud',
    region: 'us-east-1'	
})

awsdemo.constant('admin_aws_config', {
	userPoolId: 'us-east-1_k3YSBGNhr',
	appClientId: '7kk2jb00h2o6m6pd0k26fnspgk',
    identityPoolId: 'us-east-1:883587243396:userpool/us-east-1_k3YSBGNhr',
    region: 'us-east-1'	
})


awsdemo.value('admin_cognito_config', {
    language: "",
    poolData: {
    	UserPoolId: '',
    	ClientId: ''
    },
    userData: {
        Username: '',
        Pool: ''
    },
    idpKey: null,
    userPool: null,
    cognitoUser: null,
    authenticationDetails: null
})

awsdemo.value('cognito_config', {
    language: "",
    poolData: {
        UserPoolId: '',
        ClientId: ''
    },
    userData: {
        Username: '',
        Pool: ''
    },
    idpKey: null,
    userPool: null,
    cognitoUser: null,
    authenticationDetails: null
})