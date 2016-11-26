function BoardService($http) {
  this.getBoards = function () {
    return $http.get('/boards');
  }

  this.addBoard = function (data) {
    return $http.post('/boards', data);
  }

  this.getOneBoard = function (id) {
    return $http.get('/boards/' + id);
  }

  this.addToBoard = function (board, resource) {
    var data = {resource_id: resource}
    return $http.patch('/boards/' + board, data);
  }
}

angular
  .module('app')
  .service('BoardService', BoardService);