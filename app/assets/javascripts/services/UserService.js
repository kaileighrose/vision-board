function UserService($http) {
    
    this.checkUser = function () {
      return $http.get('/users');
    }

    this.SignUp = function (data) {
      return $http.post('/users', JSON.stringify(data));
    }

    this.LogIn = function (data) {
      return $http.post('/sessions', JSON.stringify(data));
    }

    this.LogOut = function (id) {
      return $http.delete('/sessions/' + id);
    }

    this.getUser = function (id) {
      return $http.get('/users/' + id);
    }
}

angular
    .module('app')
    .service('UserService', UserService);