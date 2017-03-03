'use strict';

/**
 * @ngdoc function
 * @name callejeritosAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the callejeritosAngularApp
 */
angular.module('callejeritosAngularApp')
  .controller('MainCtrl', function ($scope,MascotasFactory) {
    	
  		//Slider principal
    	$scope.images=[
    		'/images/bg1.jpg',
    		'/images/bg3.jpg',
    		'/images/bg4.jpg',
    		'/images/bg6.jpeg',
    	]

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

  });
