function ResourceController(ResourceService, $scope) {
  var ctrl = this;
  ctrl.kinds = ['link', 'idea', 'image link'];
  ctrl.form = false;
  ctrl.search = '';
  ctrl.resources = [];
  //need to add name column to table

  ctrl.showForm = function () {
    ctrl.form = true;
    $scope.apply();
  }

  ctrl.load = function () {
    var answer = [];
    resp = ResourceService.getResources();
    resp.done(function (response) {
      ctrl.resources = response;
    });
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
  .controller('ResourceController', ResourceController);