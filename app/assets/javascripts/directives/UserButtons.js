function userButtons(UserService, $compile) {
  return {
        template: [
            '<div class="userbuttons">',
                '<button ng-click="user.showLogForm()">Log in</button>', 
                '<button ng-click="user.showSignForm()">Sign Up</button>',
                '{{ctrl.forms}}',
            '</div>'
        ].join(''),
        require: 'userButtons',
        controller: function ($scope) {
            this.forms = '';
        },
        controllerAs: 'ctrl',
        link: function (scope, element, attr, ctrl) {
           // function login() {
//                ctrl.forms = "<log-form></log-form>";
//                scope.$apply();
//            }//

//            function signin() {
//                ctrl.forms = "<sign-form></sign-form>";
//                scope.$apply();
//            }//

//            element[0].on('click', login());
//            element[0].on('click', signin())//

//            scope.$on('$destroy', function () {
//                element.off();
//            });
        }
    };
}

angular
    .module('app')
    .directive('userButtons', userButtons);