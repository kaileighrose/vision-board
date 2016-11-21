function resourceDisplay() {
  return {
        templateURL: 'resourcedisplay.html'
    };
}

angular
    .module('app')
    .directive('resourceDisplay', resourceDisplay);