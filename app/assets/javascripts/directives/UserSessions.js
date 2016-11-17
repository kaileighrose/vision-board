function UserSessions() {
  return {
        template: [
            '<div class="twitter">',
                '<a href="https://twitter.com/{{ handle }}">Follow @{{ handle }} on Twitter!</a>',
                '<button ng-click="ctrl.changeHandle()">Change Handle</button>',
            '</div>'
        ].join(''),
        scope: {
            handle: '@'
        },
        controller: function ($scope) {
            // $scope.handle === 'billgates'
 
            this.changeHandle = function () {
                $scope.handle = 'angularjs';
            };
        },
        controllerAs: 'ctrl',
        restrict: 'E'
    };
}

angular
    .module('app')
    .directive('UserSessions', UserSessions);