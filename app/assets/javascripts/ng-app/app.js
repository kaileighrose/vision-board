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
                views: {
                    '': {
                      templateUrl: 'home.html',
                      controller:  'UserController as user'
                    },
                    'board@home': {
                      templateUrl: 'board.html',
                      controller: 'BoardController as board' 
                    },
                    'resources@home': {
                      templateUrl: 'resources.html',
                      controller: 'ResourceController as rs'
                    },
                    'user@home': { templateUrl: 'user.html'},
                    'sessions@home': {templateUrl: 'sessions.html'}
                }
            });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    });