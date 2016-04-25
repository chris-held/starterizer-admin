(function() {
  'use strict';

  angular
    .module('starterizerAdmin')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(DashboardService, AuthService) {
    var vm = this;
    vm.userCount = null;
    var user = AuthService.user;
    vm.isSuperadmin = _.find(user.roles, function(r){
      return r === "superadmin";
    });
    DashboardService.users({}, function(err, result){
      if (err) {
        //TODO - show an error
      } else {
        vm.userCount = result.count;
      }
    })
  }
})();
