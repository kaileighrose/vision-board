function logForm() {
  return {
        template: [
            '<div class="userForm">',
                '<form name="form" ng-submit="user.logUser(user)">',
                  '<input type="text" name="username" required="required" placeholder="Username" ng-model="user.username"></input>',
                  '<br>',
                  '<input type="text" name="password" required="required" placeholder="Password"  ng-model="user.password"></input>',
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