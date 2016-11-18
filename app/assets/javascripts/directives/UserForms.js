function UserForms(UserService) {
  return {
        template: [
            '<div class="userForm">',
                '{{forms}}',
            '</div>'
        ].join(''),
        scope: {
         forms: '='
        },
        link: function (scope, element, attrs) {
                scope.button = UserService.forms;
        },
        controller: 'UserController as "ctrl"'
    };
}

angular
    .module('app')
    .directive('UserForms', UserForms);