function ResourceService($http) {
  var resp = '';

  this.getResources = function () {
    return $.get('/resources') 
  }

  this.addResource = function (data) {
    return $http.post('/resources.json', data);
  }

  this.getOneResource = function (id) {
    return $http.get('/resoures/' + id + '.json');
  }
}

angular
  .module('app')
  .service('ResourceService', ResourceService);