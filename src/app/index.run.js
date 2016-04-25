(function() {
  'use strict';

  angular
    .module('starterizerAdmin')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $timeout, IdentityService, AuthService) {
    $log.debug('runBlock end');
    if (IdentityService.apiToken) {
      $timeout(function(){
        $rootScope.$broadcast('authenticated', AuthService.user);
      });
    }
  }

})();
