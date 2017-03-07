

/**
 * @ngdoc function
 * @name callejeritosAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the callejeritosAngularApp
 */
angular.module('callejeritosAngularApp')
  .controller('MainCtrl', function ($scope,MascotasFactory,UsersFactory,jwtHelper) {
    	 $scope.jwt = localStorage.getItem('JWT');
         $scope.decodedJwt = $scope.jwt && jwtHelper.decodeToken($scope.jwt);
         console.log($scope.jwt);
         console.log($scope.decodedJwt)
  		//Slider principal
    	$scope.images=[
    		'/images/bg1.jpg',
    		'/images/bg3.jpg',
    		'/images/bg4.jpg',
    		'/images/bg6.jpeg',
    	]
        var GetUsers = function(){
            UsersFactory.get().then(SuccessGetUsers,ErrorGetUsers)
        }

        var SuccessGetUsers = function(res){
            console.log(res);
        }
        var ErrorGetUsers = function(res){
            console.log(res);
        }

    	var GetMascotas = function(){
    		MascotasFactory.get().then(SuccessGetMascotas,ErrorGetMascotas)
    			
    	}

    	var SuccessGetMascotas = function(res){
    		$scope.mascotas = res.data;
    		console.log($scope.mascotas);
    	}
    	var ErrorGetMascotas = function(res){
    		console.log(res);
    	}
    	GetMascotas();
        GetUsers();

  });
