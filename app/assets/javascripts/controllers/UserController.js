function UserController(UserService, $scope) {
  var ctrl = this;
  ctrl.logged = false;
  ctrl.current_user = 'none';
  ctrl.form = 'none';
  ctrl.username = '';
  ctrl.password = '';

  ctrl.logUser = function (user) {
    UserService.LogIn(user).then(function (response) {
      ctrl.current_user = response.data;
    });
    ctrl.logged = true;
  }

  ctrl.signUser = function (user) {
    resp = UserService.SignUp(user).then(function (response) {
      ctrl.logUser(response.data);
    });
  }

  ctrl.check = function () {
    UserService.checkUser().then(function (response) {
      if (response.data != null) {
      ctrl.current_user = response.data;
      ctrl.logged = true;
        }
    });
  }
  
  ctrl.showLogForm = function () {
    ctrl.form = 'login';
  }

  ctrl.showSignForm = function () {
    ctrl.form = 'signin';
  }

  ctrl.signOut = function () {
    UserService.LogOut(ctrl.current_user.id);
    ctrl.current_user = 'none';
    ctrl.logged = false;
  }

  ctrl.check();
}

angular
  .module('app')
  .controller('UserController', UserController);