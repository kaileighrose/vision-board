function BoardService($http) {
  this.getBoards = function () {
    return $http.get('/boards.json');
  }

  this.addBoard = function (data) {
    return $http.post('/boards.json', data);
  }

  this.getOneBoard = function (id) {
    return $http.get('/boards/' + id + '.json');
  }
}

angular
  .module('app')
  .service('BoardService', BoardService);