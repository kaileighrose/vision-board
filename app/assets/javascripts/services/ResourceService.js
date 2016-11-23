function ResourceService($http) {

  this.getResources = function () {
    return $.get('/resources');
  }

  this.addResource = function (data) {
    return $http.post('/resources', data);
  }

  this.getOneResource = function (id) {
    return $http.get('/resoures/' + id);
  }
}

angular
  .module('app')
  .service('ResourceService', ResourceService);