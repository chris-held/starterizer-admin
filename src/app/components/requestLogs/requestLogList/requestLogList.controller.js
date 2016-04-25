(function() {
  'use strict';

  angular
    .module('starterizerAdmin')
    .controller('RequestLogListController', RequestLogListController);

  /** @ngInject */
  function RequestLogListController(RequestLogService, toastr) {
    var vm = this;
    vm.list = [];
    vm.loading = true;
    vm.getList = function(){
      RequestLogService.list({sort: "createdAt DESC"}, function(err, result){
        if (err) {
          toastr.error(err);
        } else {
          vm.list = result;
        }
        vm.loading = false;
      });
    };

    vm.getList();

  }
})();