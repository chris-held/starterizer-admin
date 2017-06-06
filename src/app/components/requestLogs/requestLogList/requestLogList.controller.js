(function() {
  'use strict';

  angular
    .module('starterizerAdmin')
    .controller('RequestLogListController', RequestLogListController);

  /** @ngInject */
  function RequestLogListController(RequestLogService, toastr, $scope) {
    var vm = this;
    vm.list = [];
    vm.getList = function(){
      vm.loading = true;
      RequestLogService.list({
        sort: "createdAt DESC",
        limit: $scope.paginationOptions.limit,
        skip: ($scope.paginationOptions.limit * $scope.paginationOptions.page)},
        function(err, result){
        if (err) {
          toastr.error(err);
        } else {
          vm.list = result;
        }
        vm.loading = false;
      });
    };


    $scope.paginationOptions = {
      page: 0,
      limit: 10,
      getList: vm.getList
    };

    //vm.nextPage = function(){
    //  $scope.paginationOptions.page++;
    //  $scope.paginationOptions.getList();
    //};
    //
    //vm.prevPage = function(){
    //  if ($scope.paginationOptions.page > 0) {
    //    $scope.paginationOptions.page--;
    //  }
    //  $scope.paginationOptions.getList();
    //};

    vm.getList();

  }
})();