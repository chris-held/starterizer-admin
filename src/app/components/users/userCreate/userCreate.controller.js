(function() {
  'use strict';

  angular
    .module('starterizerAdmin')
    .controller('UserCreateController', UserCreateController);

  /** @ngInject */
  function UserCreateController(AuthService, toastr, $state) {
    var vm = this;
    vm.save = function() {
      AuthService.register(vm.model, function(err){
        if (!err) {
          $state.go('user-list');
          toastr.success("User Created Successfully");
        } else {
          toastr.error(err, "Error");
        }
      });
    };
  }
})();