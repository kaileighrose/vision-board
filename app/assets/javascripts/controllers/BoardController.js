function BoardController(BoardService) {
  var ctrl = this;
  ctrl.data = [];
  ctrl.boards = {};
  // boardname => [resources]

  ctrl.load = function () {
    ctrl.boards = BoardService.getBoards();
    return ctrl.boards;
  }

  ctrl.create = function (resource) {
    var res = ResourceService.addResource(resource);
    ctrl.resources.push(res);
    return ctrl.resources;
  }

  ctrl.get = function (id) {
    return ResourceService.getOneResource(id);
  }

  ctrl.load();
}

angular
  .module('app')
  .controller('BoardController', BoardController);