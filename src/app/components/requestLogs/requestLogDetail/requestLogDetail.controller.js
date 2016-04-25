(function() {
  'use strict';

  angular
    .module('starterizerAdmin')
    .controller('RequestLogDetailController', RequestLogDetailController);

  /** @ngInject */
  function RequestLogDetailController($stateParams, RequestLogService, toastr) {
    var vm = this;
    vm.id = $stateParams.id;
    vm.getDetails = function(){
      RequestLogService.get({id: vm.id}, function(err, result){
        if (err) {
          toast.error(err);
        } else {
          vm.model = result;
        }
      });
    };

    vm.getDetails();

  }
})();