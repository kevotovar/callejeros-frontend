

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
  .config(function ($routeProvider, $httpProvider, jwtOptionsProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        data: {
          requiresLogin: true
        }
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
      .when('/donativos',{
        templateUrl: 'views/donativos.html',
        controller:'MainCtrl',
        controllerAs:'main'
      })
      .otherwise({
        redirectTo: '/'
      });
      //$httpProvider.defaults.headers.common['Authorization'] = 'JWT '+localStorage.getItem('JWT');
      jwtOptionsProvider.config({
        authHeader:'Authorization',
        authPrefix:'JWT',
        whiteListedDomains : ['127.0.0.1:8000'],
        tokenGetter : function(options, jwtHelper){
          var token = localStorage.getItem('JWT');
          console.log(token);
          return token;
        }
      })
     $httpProvider.interceptors.push('jwtInterceptor');
  });
