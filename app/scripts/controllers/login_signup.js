

/**
 * @ngdoc function
 * @name callejeritosAngularApp.controller:LoginSignupCtrl
 * @description
 * # LoginSignupCtrl
 * Controller of the callejeritosAngularApp
 */
angular.module('callejeritosAngularApp')
  .controller('LoginSignupCtrl', function (Login,$scope,jwtHelper) {
    $scope.user={}
    $scope.Login = function(){
    	Login.post($scope.user).then(SuccessLogin,ErrorLogin);
    }
    var SuccessLogin = function(res){
    	var tokenPayLoad = jwtHelper.decodeToken(res.data.token)
    	console.log(res);
    	console.log('tokenPayLoad',tokenPayLoad);
    	localStorage.setItem('JWT', res.data.token);
    	console.log(res.config.headers.Authorization);
    }
    var ErrorLogin = function(res){
    	console.log(res.data)
    	$scope.error_login = res.data.non_field_errors[0];
    }
  });
