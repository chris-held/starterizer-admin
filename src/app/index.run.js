(function() {
  'use strict';

  angular
    .module('starterizerAdmin')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $timeout, IdentityService) {
    $log.debug('runBlock end');
    if (IdentityService.apiToken && IdentityService.user) {
      $timeout(function(){
        $rootScope.$broadcast('authenticated', IdentityService.user);
      });
    }
  }

})();
