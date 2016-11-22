function UserController(UserService, $scope) {
  var ctrl = this;
  ctrl.current_user = 'none';
  ctrl.form = 'none';
  ctrl.username = '';
  ctrl.password = '';
  //ctrl.user = user.data;

  ctrl.logUser = function (user) {
    resp = UserService.LogIn(user);
    ctrl.current_user = resp.data;
    console.log(ctrl.current_user);
    $scope.apply();
  }

  ctrl.signUser = function (user) {
    resp = UserService.SignUp(user);
    ctrl.current_user = resp.data;
    $scope.apply();
  }

  ctrl.check = function () {
    console.log(ctrl.current_user);
    if (ctrl.current_user == 'none') {
      ctrl.current_user = UserService.checkUser();
    }
  }
  
  ctrl.showLogForm = function () {
    ctrl.form = 'login';
    $scope.apply();
  }

  ctrl.showSignForm = function () {
    ctrl.form = 'signin';
    $scope.apply();
  }

  ctrl.signOut = function () {
    UserService.LogOut(ctrl.current_user.id);
    ctrl.current_user = 'none';
    $scope.apply();
  }

  ctrl.check();

}

angular
  .module('app')
  .controller('UserController', UserController);