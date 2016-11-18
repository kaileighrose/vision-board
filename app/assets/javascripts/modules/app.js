angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'users/index.html',
                controller: 'UserController as user'
            });
    $urlRouterProvider.otherwise('/');
    });