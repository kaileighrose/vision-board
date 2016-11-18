function signForm() {
  return {
        template: [
            '<div class="userForm">',
                '{{forms}}',
            '</div>'
        ].join(''),
        link: function (scope, element, attrs) {
                scope.button = UserService.forms;
        },
        controller: 'UserController as "ctrl"'
    };
}

angular
    .module('app')
    .directive('signForm', signForm);