(function() {
  'use strict';

  angular
    .module('starterizerAdmin')
    .controller('UserListController', UserListController);

  /** @ngInject */
  function UserListController(UserService, toastr) {
    var vm = this;
    vm.users = [];
    vm.loading = true;
    vm.getList = function() {
      UserService.list({}, function(err, result){
        vm.loading = false;
        if (err) {
          toastr.error(err);
        } else {
          vm.users = result;
        }
      });
    };

    vm.getList();
  }
})();