function UserService($http) {
    //remember to add logout
    var current_user;

    this.checkUser = function () {
      resp = $http.get('/users.json');
      console.log(resp.$$state);
      if (resp.$$state.data == 404 || resp.$$state.data == null) {
        return 'none';
      }
      else {
        current_user = resp.$$state.data
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