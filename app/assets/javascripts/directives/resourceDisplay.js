function resourceDisplay() {
  return {
        template: [
          '<div ng-switch on="resource.kind">',
            ' <div ng-switch-when="image link"><img src="{{resource.item}}">{{resource.name}}</img></div>',
            '<div ng-switch-when="link"><a href="resource.item">{{resource.name}}</a></div>',
            ' <div ng-switch-default><h3>Title: {{resource.name}}</h3><p>{{resource.item}}</p></div>',
          '</div>'
        ].join('')
    };
}

angular
    .module('app')
    .directive('resourceDisplay', resourceDisplay);