var RESOURCES_PER_PAGE = 20;
function ResourceController(resources) {
  var ctrl = this;
  ctrl.data = [];
  
  ctrl.page = 0;
  ctrl.totalResources = resources.data.length;
  ctrl.totalPages = Math.ceil(ctrl.totalResources / RESOURCES_PER_PAGE);

  ctrl.paginateResources = function () {
    ctrl.data = resources.data.slice(ctrl.page * RESOURCES_PER_PAGE, (ctrl.page + 1) * RESOURCES_PER_PAGE);
    var info;
    for (var i = 0; i < ctrl.data.length; i++) {
      //info = TopService.getPost(ctrl.posts[i])
      //ctrl.detail.push(info.$$state);
    }
  };

  ctrl.nextPage = function () {
    ctrl.page++;
    ctrl.paginateResources()
  };

  ctrl.previousPage = function () {
    ctrl.page--;
    ctrl.paginateResources();
  };

  ctrl.paginateResources();
}

angular
  .module('app')
  .controller('ResourceController', ResourceController);