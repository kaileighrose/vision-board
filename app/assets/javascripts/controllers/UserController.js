function UserController(UserService, user) {
  var ctrl = this;
  ctrl.current_user;
  //ctrl.user = user.data;

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