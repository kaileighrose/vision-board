function UserSessions() {
  return {
        template: [
            '<div class="userForm">',
                '{{userform}}',
            '</div>'
        ].join(''),
        scope: {
          userform: '='
        },
        controller: function ($scope) {
            this.switchForm = function () {
                $scope.handle = 'angularjs';
            };
        },
        controllerAs: 'ctrl'
    };
}

angular
    .module('app')
    .directive('UserSessions', UserSessions);