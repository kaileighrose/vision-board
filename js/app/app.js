angular
    .module('app', ['ui.router', 'ngSanitize'])
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: '/board.html',
            controller: 'MainCtrl'
          });

      $urlRouterProvider.otherwise('home');
    }])