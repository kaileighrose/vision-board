function ResourceService($http) {
  this.getResources = function () {
    return $http.get('/resources.json');
  }

  this.addResource = function (data) {
    return $http.post('/resources.json', data);
  }

  this.getOneResource = function () {
    // body...
  }
}

angular
  .module('app')
  .service('ResourceService', ResourceService);