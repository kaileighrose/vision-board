function signForm() {
  return {
        template: [
            '<div class="userForm">',
                '<form ng-submit="user.signUser(data); userData={}">',
                  '<input type="text" placeholder="Username" ng-model="userData.username"></input>',
                  '<br>',
                  '<input type="text" placeholder="Password" ng-model="userData.password"></input>',
                  '<br>',
                  '<button type="submit">Sign up</button>',
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
    .directive('signForm', signForm);