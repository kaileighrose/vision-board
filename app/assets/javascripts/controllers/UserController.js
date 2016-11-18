function UserController(UserService, user) {
  var ctrl = this;
  this.current_user;
  ctrl.user = user.data;
}

angular
  .module('app')
  .controller('UserController', UserController);