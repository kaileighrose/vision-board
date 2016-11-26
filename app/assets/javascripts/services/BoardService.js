function BoardService($http) {
  this.getBoards = functrion () {
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

  this.removeResource = function (resource, board) {
    var data = {resource_id: resource}
    return $http.post('/boards/' + board + '/remove', data)
  }
}

angular
  .module('app')
  .service('BoardService', BoardService);