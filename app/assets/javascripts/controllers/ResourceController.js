function ResourceController(ResourceService) {
  var ctrl = this;
  ctrl.data = [];
  ctrl.types = ['link', 'idea', 'image link']
}

angular
  .module('app')
  .controller('ResourceController', ResourceController);