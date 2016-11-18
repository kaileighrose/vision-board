function UserService($http) {
    //remember to add logout
    var current_user;
    this.form = '';
    this.buttons = '';

    this.checkUser = function () {
      current_user = $http.get('/users');
      if (current_user = null) {
        this.buttons = '<button ng-click="logForm()">Log in</button>  <button ng-click="signForm()">Sign Up</button>'
        return null;
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