function UserService($http) {
  
    var current_user = '';

    this.checkUser = function () {
      $http({
        method: 'GET',
        url: '/users.json'
      }).then(function successCallback(response) {
          current_user = response.data;
          return current_user;
        }, function errorCallback(response) {
          console.log('error');
          return 'none';
        });
    };

    this.SignUp = function (data) {
      return $http.post('/users', JSON.stringify(data));
    }

    this.LogIn = function (data) {
      return $http.post('/sessions', JSON.stringify(data));
    }

    this.LogOut = function (id) {
      $http({
        method: 'DELETE',
        url: '/sessions' + id
      });
    }
}

angular
    .module('app')
    .service('UserService', UserService);