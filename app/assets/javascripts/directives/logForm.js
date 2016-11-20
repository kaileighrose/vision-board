function logForm() {
  return {
        template: [
            '<div class="userForm">',
                '<form ng-submit="user.logUser()">',
                  '<input type="text" placeholder="Username" ng-model="username"></input>',
                  '<br>',
                  '<input type="text" placeholder="Password" ng-model="password"></input>',
                  '<br>',
                  '<button type="submit">Log in</button>',
                '</form>',
            '</div>'
        ].join(''),
        controller: function (scope) {
        },
        controller: 'UserController as ctrl'
    };
}

angular
    .module('app')
    .directive('logForm', logForm);