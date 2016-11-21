function BoardController(BoardService) {
  var ctrl = this;
  ctrl.data = [];
  ctrl.types = ['link', 'idea', 'image link']
}

angular
  .module('app')
  .controller('BoardController', BoardController);