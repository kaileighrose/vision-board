function ResourceController(ResourceService, $scope) {
  var ctrl = this;
  ctrl.kinds = ['link', 'idea', 'image link'];
  ctrl.form = false;
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

  ctrl.load();
  
}

angular
  .module('app')
  .controller('ResourceController', ResourceController);