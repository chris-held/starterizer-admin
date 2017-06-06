(function() {
  'use strict';

  angular
    .module('starterizerAdmin')
    .controller('UserListController', UserListController);

  /** @ngInject */
  function UserListController(UserService, toastr, $scope) {
    var vm = this;
    vm.users = [];
    vm.getList = function() {
      vm.loading = true;
      UserService.list({}, function(err, result){
        vm.loading = false;
        if (err) {
          toastr.error(err);
        } else {
          vm.users = result;
        }
      });
    };

    $scope.paginationOptions = {
      page: 0,
      limit: 10,
      getList: vm.getList
    };

    vm.getList();
  }
})();