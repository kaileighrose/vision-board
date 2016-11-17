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
            })
            .state('post', {
                url: '/post/:id',
                templateUrl: '/views/post.html',
                controller: 'PostController as post',
                resolve: {
                    post: function ($stateParams, TopService) {
                        return TopService.getPost($stateParams.id);
                    }
                }
            });
    $urlRouterProvider.otherwise('/');
    }])