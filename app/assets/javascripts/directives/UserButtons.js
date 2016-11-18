function UserButtons(UserService) {
  return {
        template: [
            '<div class="userbuttons">',
                '{{buttons}}',
            '</div>'
        ].join(''),
        scope: {
         buttons: '='
        },
        link: function (scope, element, attrs) {
                scope.button = UserService.buttons;
        },
        controller: 'UserController as "ctrl"'
    };
}

angular
    .module('app')
    .directive('userButtons', UserButtons);