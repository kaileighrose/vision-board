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
}

angular
  .module('app')
  .service('BoardService', BoardService);