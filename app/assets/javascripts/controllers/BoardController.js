function BoardController(BoardService) {
  var ctrl = this;
  ctrl.boards = [];
  ctrl.mainboard = [];
  ctrl.form = false;
  // boardname => [resources]

  ctrl.viewForm = function () {
    console.log('form function')
    ctrl.form = true;
  }

  ctrl.load = function () {
    BoardService.getBoards().then(function (response) {
      ctrl.boards = response.data;
      ctrl.mainboard = ctrl.boards[0];
    });
  }

  ctrl.create = function (board) {
    BoardService.addBoard(board);
    ctrl.load();
  }

  ctrl.get = function (id) {
    BoardService.getOneBoard(id).then(function (response) {
      console.log(response);
      ctrl.mainboard = response.data;
    });
  }

  ctrl.remove = function (resource_id) {
    BoardService.removeResource(resource_id, ctrl.mainboard.id);
    ctrl.get(ctrl.mainboard.id);
  }

  ctrl.load();
}

angular
  .module('app')
  .controller('BoardController', BoardController);