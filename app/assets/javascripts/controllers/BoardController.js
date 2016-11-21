function BoardController(BoardService) {
  var ctrl = this;
  ctrl.data = [];
  ctrl.boards = {};
  // boardname => [resources]

  ctrl.load = function () {
    ctrl.boards = BoardService.getBoards();
    return ctrl.boards;
  }

  ctrl.create = function (board) {
    var res = BoardService.addBoard(board);
    ctrl.boards.push(res);
    return ctrl.boards;
  }

  ctrl.get = function (id) {
    return BoardService.getOneBoard(id);
  }

  ctrl.load();
}

angular
  .module('app')
  .controller('BoardController', BoardController);