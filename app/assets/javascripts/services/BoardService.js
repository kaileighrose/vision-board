function BoardService($http) {
  this.getBoards = function () {
    return $.get('/boards');
  }

  this.addBoard = function (data) {
    return $.post('/boards', data);
  }

  this.getOneBoard = function (id) {
    return $.get('/boards/' + id);
  }
}

angular
  .module('app')
  .service('BoardService', BoardService);