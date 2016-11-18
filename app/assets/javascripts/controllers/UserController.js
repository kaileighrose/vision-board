function UserController(UserService) {
  var ctrl = this;
  ctrl.current_user;
  //ctrl.user = user.data;

  ctrl.show = function () {
   return ['<div ng-controller="UserController as user">',
          '<user-buttons></user-buttons>',
          '<user-forms></user-forms>',
        '</div>']
  }

  ctrl.logUser = function (data) {
    ctrl.current_user = UserService.LogIn(data);
  }

  ctrl.signUser = function (data) {
    ctrl.current_user = UserService.SignUp(data);
  }
}

angular
  .module('app')
  .controller('UserController', UserController);