angular.module('aws') .controller('loginController', [
						"$scope",
						"$http",
						"$location",
						"$localStorage",
						"$timeout",
						"aws_config",
						"restAPI_url",
						"cognito_config",
						"$rootScope",
						function($scope, $http, $location, $localStorage,
								$timeout, aws_config, restAPI_url,
								cognito_config, $rootScope) {
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
								//console.log("Session:",session);
								if (session != null && session.username != null) {
									$location.path("/aws");
									$location.replace();
								}

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

							$scope.authenticate = function() {
								
								$scope.showSpinner = true;
								cognito_config.cognitoUser.authenticateUser(cognito_config.authenticationDetails,
												{  									
													onSuccess : function(result) {
														$scope.showSpinner = false;
														//console.log('access token :: + ' + result.getAccessToken().getJwtToken());
														localStorage.setItem("username",cognito_config.cognitoUser.username);
														$rootScope.tokenId = result.getIdToken().getJwtToken();  	
														//console.log("id token:"+$rootScope.tokenId);
														cognito_config.idpKey = ('cognito-idp.'+ aws_config.region + '.amazonaws.com/' + aws_config.userPoolId);
														var key = cognito_config.idpKey;
														AWS.config.credentials = new AWS.CognitoIdentityCredentials({
																	IdentityPoolId : aws_config.identityPoolId, 
															Logins : {
         																key : result.getIdToken().getJwtToken()
																	}
																});
														
														cognito_config.cognitoUser
																.getUserAttributes(function(err,result) {
																	if (err) {
																	}
																	
																});
														
														//console.log("Redirect to Sucess Page");
														$scope.errorFlag = false;
														$location.path("/aws");
													    $scope.$apply();
													},
													onFailure : function(err) {
														$scope.errorFlag = true;
														$scope.showSpinner = false;
														//$location.path("/loginerror");
													    $scope.$apply();
														//console.log("authenticateUser:",err);
													
													},

													newPasswordRequired : function(userAttributes,requiredAttributes) {
														var newPassword = "Techm123$";
														userAttributes.email = 'NK00484143@techmahindra.com';
														console.log(userAttributes.email);
														cognito_config.cognitoUser.completeNewPasswordChallenge(newPassword,userAttributes,this)
													}
												});
							};

							$scope.validateUser = function() {
								localStorage.setItem("userRole","user");
								$scope.setUserPool($scope.userId,$scope.password);
								$rootScope.userName = $scope.userId;
								$scope.authenticate();
								$scope.email = "";
								$scope.password = "";
							}
							
						} ]);
