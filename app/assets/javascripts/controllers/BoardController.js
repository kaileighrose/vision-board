function BoardController(BoardService) {
  var ctrl = this;
  ctrl.boards = [];
  ctrl.mainboard = [];
  ctrl.clicked;
  // boardname => [resources]

  ctrl.load = function () {
    resp = BoardService.getBoards();
    resp.done(function (response) {
      ctrl.boards = response;
      console.log(response);
    });
  }

  ctrl.create = function (board) {
    BoardService.addBoard(board);
    ctrl.load();
  }

  ctrl.get = function (id = 1) {
    resp = BoardService.getOneBoard(id);
    resp.done(function (response) {
      console.log(response);
      ctrl.mainboard = response;
    });
  }

  ctrl.load();
  ctrl.get();
}

angular
  .module('app')
  .controller('BoardController', BoardController);