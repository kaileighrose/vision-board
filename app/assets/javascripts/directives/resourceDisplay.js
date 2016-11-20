function resourceDisplay() {
  return {
        template: [
            '<div ng-if="resource.type == 'image link'"><img src="{{resource.item}}"></div>',
        '<div ng-if="resource.type == 'idea'"><h3>{{resource.item}}</h3></div>',
        '<div ng-if="resource.type == 'link'""><a href="{{resource.item}}"></a></div>'
        ].join(''),
        controller: function (scope) {

        }
    };
}

angular
    .module('app')
    .directive('resourceDisplay', ResourceDisplay);