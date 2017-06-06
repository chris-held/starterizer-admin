(function() {
  'use strict';

  angular
    .module('starterizerAdmin')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(DashboardService, IdentityService, toastr) {
    var vm = this;
    vm.userCount = null;
    vm.requestCount = null;
    vm.isSuperadmin = false;
    DashboardService.users({}, function(err, result){
      if (err) {
        toastr.error(err);
      } else {
        var user = IdentityService.user;
        vm.isSuperadmin = _.find(user.roles, function(r){
          return r === "superadmin";
        });
        vm.userCount = result.count;
      }
    });

    DashboardService.requests({}, function(err, result){
      if (err) {
        toastr.error(err);
      } else {
        vm.requestCount = result.count;
      }
    })
  }
})();
