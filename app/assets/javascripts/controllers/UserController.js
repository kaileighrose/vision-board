function UserController(UserService, $scope) {
  var ctrl = this;
  ctrl.current_user = 'none';
  ctrl.form = 'none';
  ctrl.username = '';
  ctrl.password = '';
  //ctrl.user = user.data;

  ctrl.logUser = function (user) {
    ctrl.current_user = UserService.LogIn({username: ctrl.username, password: ctrl.password});
  }

  ctrl.signUser = function (user) {
    console.log(user);
    ctrl.current_user = UserService.SignUp(user);
  }

  ctrl.check = function () {
    ctrl.current_user = UserService.checkUser();
  }
  
  ctrl.showLogForm = function () {
    console.log('sign in clicked');
    ctrl.form = 'login';
    $scope.apply();
  }

  ctrl.showSignForm = function () {
    console.log('sign up clicked');
    ctrl.form = 'signin';
    $scope.apply();
  }

  ctrl.check();

}

angular
  .module('app')
  .controller('UserController', UserController);