(function() {
  'use strict';

  angular
    .module('starterizerAdmin')
    .controller('UserDetailController', UserDetailController);

  /** @ngInject */
  function UserDetailController($stateParams, UserService, toastr) {
    var vm = this;
    vm.userId = $stateParams.id;
    vm.getDetails = function(){
      UserService.get({id: vm.userId}, function(err, result){
        if (err) {
          toastr.error(err);
        } else {
          vm.isAdmin = _.find(result.roles, function(r) {return r === 'admin'});
          vm.isSuperadmin = _.find(result.roles, function(r) {return r === 'superadmin'});
          vm.model = result;
        }
      });
    };

    vm.update = function() {

    };

    vm.changePassword = function() {

    };

    vm.updateRoles = function() {

    };

    vm.getDetails();
  }
})();