function UserController(UserService, $scope) {
  var ctrl = this;
  ctrl.logged = false;
  ctrl.current_user = 'none';
  ctrl.form = 'none';
  ctrl.username = '';
  ctrl.password = '';
  $scope.$on('reloadResourceBoards', function(event, data) {ctrl.reLoad()});

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
    if (ctrl.current_user == 'none') {
    UserService.checkUser().then(function (response) {
      if (response.data != null) {
        ctrl.current_user = response.data;
        ctrl.logged = true;
        }
    }) } else {
      ctrl.reLoad();
    }
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

  ctrl.reLoad = function () {
    UserService.getUser(ctrl.current_user.id).then(function (response) {
      if (response.data != null) {
        ctrl.current_user = response.data;
        }
    });
  }

  ctrl.check();
}

angular
  .module('app')
  .controller('UserController', UserController);