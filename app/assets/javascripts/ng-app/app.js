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
                    '': {templateUrl: 'home.html'},
                    'board@home': {
                      templateUrl: 'board.html',
                      controller: 'BoardController as board' 
                    },
                    'resources@home': {
                      templateUrl: 'resources.html',
                      controller: 'ResourceController as rs',
                      children: [
                        {
                          name: 'resources.addresource',
                          templateUrl: 'addresource.html'
                        }
                      ]
                    },
                    'user@home': {
                      templateUrl: 'user.html',
                      controller:  'UserController as user'
                    },
                    'sessions@home': {
                      templateUrl: 'sessions.html',
                      controller:  'UserController as user'
                    }
                }
            })
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    });