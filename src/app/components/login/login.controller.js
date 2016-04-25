(function() {
  'use strict';

  angular
    .module('starterizerAdmin')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(AuthService, $state, toastr, $rootScope) {
    var vm = this;
    vm.login = function() {
      AuthService.login({username: vm.username, password: vm.password}, function(err, user){
        if (err) {
          toastr.error(err, "Error")
        } else {
          $rootScope.$broadcast('authenticated', user);
          $state.go("main");
        }
      });
    };
  }
})();
