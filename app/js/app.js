(function(){
  'use strict';

  angular.module('myApp', ['ngRoute'])
    .config(function($routeProvider){
      $routeProvider.when('/home', {
        templateUrl: 'partials/home.html'
      }).when('/user', {
        templateUrl: 'partials/user.html'
      }).otherwise('/');
    });
})();
