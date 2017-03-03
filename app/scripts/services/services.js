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
