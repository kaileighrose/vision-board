function UserButtons(UserService) {
  return {
        template: [
            '<div class="userForm">',
                '{{buttons}}',
            '</div>'
        ].join(''),
        scope: {
          userform: '='
        },
        link: function (scope, element, attrs) {
                scope.button = UserService.buttons;
        }
        controller: 'UserController as "ctrl"'
    };
}

angular
    .module('app')
    .directive('UserSessions', UserSessions);