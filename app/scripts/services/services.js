'use strict';

/**
 * @ngdoc service
 * @name callejeritosAngularApp.services
 * @description
 * # services
 * Service in the callejeritosAngularApp.
 */
angular.module('callejeritosAngularApp')
  .factory('MascotasFactory', function mascotasFactory($http){
  	return{
  		get: function(){
  			return $http.get('http://127.0.0.1:8000/api/v1/mascotas/');
  		}


  	}

  })
  .factory('Login', function login($http){
  	return{
  		post: function(user){
  			return $http({
  				method: 'POST',
  				url: 'http://127.0.0.1:8000/api/v1/auth/',
  				headers:{'Content-Type' : 'application/json'},
  				data: user

  			})
  		}

  	}


  })
  .factory('UsersFactory', function usersFactory($http){
  	return{
  		get: function(){
  			return $http.get('http://127.0.0.1:8000/api/v1/users/');
  		}
  	}
  })
