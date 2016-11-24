function ResourceService($http) {

  this.getResources = function () {
    return $http.get('/resources');
  }

  this.addResource = function (data) {
    return $http.post('/resources', data);
  }

  this.getOneResource = function (id) {
    return $http.get('/resources/' + id);
  }

  this.deleteResource = function (id) {
    return $http.delete('/resources/' + id);
  }
}

angular
  .module('app')
  .service('ResourceService', ResourceService);