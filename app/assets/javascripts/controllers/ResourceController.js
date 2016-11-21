function ResourceController(ResourceService) {
  var ctrl = this;
  ctrl.types = ['link', 'idea', 'image link']
  //need to add name column to table
  ctrl.load = function () {
    ctrl.resources = ResourceService.getResources();
    return ctrl.resources;
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