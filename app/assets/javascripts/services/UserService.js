function UserService($http) {
    var current_user;
    this.checkUser = function () {
      current_user = $http.get('/users');
      if (current_user.length = 0 || current_user = null) {
        return 'no user'
      }
      else {
        return current_user;
      }
    };

    this.SignUp = function (data) {
      return $http.post('/users', JSON.stringify(data));
    }

    this.LogIn = function (data) {
      return $http.post('/sessions', JSON.stringify(data));
    }
}

angular
    .module('app')
    .service('UserService', UserService);