'use strict';

/**
 * @ngdoc overview
 * @name callejeritosAngularApp
 * @description
 * # callejeritosAngularApp
 *
 * Main module of the application.
 */
angular
  .module('callejeritosAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ng-backstretch',
    'angular-jwt',
    'ngMap'
  ])
  .config(function ($routeProvider, $httpProvider,jwtOptionsProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginSignupCtrl',
        controllerAs: 'loginsignup'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'LoginSignupCtrl',
        controllerAs: 'loginsignup'
      })
      .when('/perfil',{
        templateUrl: 'views/perfil.html',
        controller:'MainCtrl',
        controllerAs:'main'
      })
      .when('/adopta',{
        templateUrl: 'views/adopta.html',
        controller:'MainCtrl',
        controllerAs:'main'
      })
      .otherwise({
        redirectTo: '/'
      });

     jwtOptionsProvider.config({
      authPrefix:'JWT',
      whiteListedDomains: ['localhost','127.0.0.1:8000'],
      tokenGetter: localStorage.getItem('JWT'),
     })
     //$httpProvider.interceptors.push('jwtInterceptor');
  });
