function UserController(UserService, $scope) {
  var ctrl = this;
  ctrl.current_user = 'none';
  ctrl.form = 'none';
  ctrl.username = '';
  ctrl.password = '';
  //ctrl.user = user.data;

  ctrl.logUser = function (data) {
    ctrl.current_user = UserService.LogIn({username: ctrl.username, password: ctrl.password});
  }

  ctrl.signUser = function (data) {
    ctrl.current_user = UserService.SignUp({username: ctrl.username, password: ctrl.password});
  }
  ctrl.check = function () {
    ctrl.current_user = UserService.checkUser();
  }
  
  ctrl.showLogForm = function () {
    console.log('you know clicked');
    ctrl.form = 'login';
    $scope.apply();
  }

  ctrl.showSignForm = function () {
    console.log('sign clicked');
    ctrl.form = 'signin';
    $scope.apply();
  }

  ctrl.check();

}

angular
  .module('app')
  .controller('UserController', UserController);