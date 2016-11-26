function ResourceController(ResourceService, BoardService, $scope, $rootScope) {
  var ctrl = this;
  ctrl.kinds = ['link', 'idea', 'image link'];
  ctrl.sortType = 'name';
  ctrl.form = false;
  ctrl.boardForm = false;
  ctrl.search = '';
  ctrl.resources = [];
  //need to add name column to table

  ctrl.showForm = function () {
    ctrl.form = true;
  }

  ctrl.checkResource = function (resource) {
    return resource.kind
  }

  ctrl.load = function () {
    ResourceService.getResources().then(function (response) {
      ctrl.resources = response.data;
    });
  }

  ctrl.create = function (resource) {
    ResourceService.addResource(resource)
    ctrl.load();
  }

  ctrl.get = function (id) {
    return ResourceService.getOneResource(id);
  }

  ctrl.delete = function (id) {
    ResourceService.deleteResource(id);
    ctrl.load();
  }

  ctrl.addToBoard = function (resource, board) {
    BoardService.addToBoard(board, resource);
    $rootScope.$broadcast('reloadBoard', board);
  }

  ctrl.showBoardForm = function () {
    console.log('show board clicked');
    ctrl.boardForm = true;
  }

  ctrl.load();
  
}

angular
  .module('app')
  .controller('ResourceController', ResourceController);