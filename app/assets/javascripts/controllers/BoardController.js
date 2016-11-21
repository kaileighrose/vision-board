function BoardController(BoardService) {
  var ctrl = this;
  ctrl.data = [];
  ctrl.boards = {};
  // boardname => [resources]
}

angular
  .module('app')
  .controller('BoardController', BoardController);