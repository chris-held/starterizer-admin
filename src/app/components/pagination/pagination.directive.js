(function() {
  'use strict';

  angular
    .module('starterizerAdmin')
    .directive('pagination', pagination);

  /** @ngInject */
  function pagination() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/pagination/pagination.template.html',
      scope: {
        paginationOptions: "="
      },
      controller: PaginationController,
      controllerAs: 'vm'
    };

    return directive;

    /** @ngInject */
    function PaginationController($scope) {
      var vm = this;
      vm.nextPage = function(){
        $scope.paginationOptions.page++;
        $scope.paginationOptions.getList();
      };

      vm.prevPage = function(){
        if ($scope.paginationOptions.page > 0) {
          $scope.paginationOptions.page--;
        }
        $scope.paginationOptions.getList();
      };
    }
  }

})();
