angular
    .module('app', ['ui.router', 'ngSanitize'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/views/users/show.html',
                controller: 'UserController as user',
                resolve: {
                  user: function (UserService) {
                    return UserService.checkUser();
                  }
                }
            });
    $urlRouterProvider.otherwise('/');
    });