angular.module('aws') .controller('userRegisterController', [
						"$scope",
						"$http",
						"$location",
						"$localStorage",
						"$timeout",
						"aws_config",
						"restAPI_url",
						"cognito_config",
						"$rootScope",
						"$state",
						function($scope, $http, $location, $localStorage,
								$timeout, aws_config, restAPI_url,
								cognito_config, $rootScope,$state) {
							var userPool;
							$scope.langchecked = 0;
							$scope.errorFlag = false;
							$scope.showSpinner = false;
							$scope.init = function() {
								$rootScope.userName = null;
								//console.log("Login init");
								cognito_config.poolData.UserPoolId = aws_config.userPoolId,
								cognito_config.poolData.ClientId = aws_config.appClientId
								var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(cognito_config.poolData);
								var session = userPool.getCurrentUser();
								

							};

							$scope.setUserPool = function(username, password) {
							  // console.log('cognito_config:',username);
								cognito_config.poolData.UserPoolId = aws_config.userPoolId,
								cognito_config.poolData.ClientId = aws_config.appClientId
								cognito_config.userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(
								cognito_config.poolData);
								cognito_config.userData.Username = username;
								cognito_config.userData.Pool = cognito_config.userPool;
								cognito_config.cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(cognito_config.userData);
								var authenticationData = {
									Username : username,
									Password : password
								};
								cognito_config.authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
								
							};

							
							$scope.signUp = function() {
							  $scope.showSpinner = true;
						        $scope.setUserPool($scope.userId,$scope.password);
						    	var attributeList = [];
						        var dataEmail = {
						            Name : 'email',
						            Value : $scope.emailId
						        };
						        
						        var attributeEmail = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail);
						        attributeList.push(attributeEmail);
						       
						        cognito_config.userPool.signUp($scope.userId, $scope.password, attributeList, null, function(err, result){
						            if (err) {
						                alert(err);
						                $scope.showSpinner = false;
						                return;
						            }
						            
						           var cognitoUser = result.user;
						           var verificationCode= prompt('Please provide verification code sent to Registered Email: ' ,'');
						            cognitoUser.confirmRegistration(verificationCode, true, function(err, result) {
						                if (err) {
						                    alert(err);
						                    $scope.showSpinner = false;
						                    return;
						                }
						                $scope.showSpinner = false;
						                alert("User Registration SucessFul.Please Login to Application");
						                $state.go("login");
						            });
						            
						            //console.log('user name is ' +   cognito_config.cognitoUser.getUsername());
						        });
						    };

							

							
							
						} ]);
