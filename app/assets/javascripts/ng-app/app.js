angular
    .module('app', [
        'ngAnimate',
        'ui.router',
        'templates'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'users/index.html',
                controller: 'UserController as user'
            });
    $urlRouterProvider.otherwise('/');
    });