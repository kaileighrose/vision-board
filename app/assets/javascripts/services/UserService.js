function UserService($http) {
    this.getUser = function (id) {
        return $http.get('http://0.0.0.0:8882/rest/user/' + id);
    };
}

angular
    .module('app')
    .service('UserService', UserService);