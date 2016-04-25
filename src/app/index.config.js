(function() {
  'use strict';

  angular
    .module('starterizerAdmin')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $mdThemingProvider, $httpProvider, RestangularProvider, apiUrl) {
    // Enable log
    $logProvider.debugEnabled(true);

    RestangularProvider.setBaseUrl(apiUrl);

    RestangularProvider.setDefaultHttpFields({
      withCredentials: true,
      crossDomain: true,
      cache: false
    });

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('red')
      .warnPalette('amber')
      .backgroundPalette('grey');

    $httpProvider.interceptors.push(['$q', '$injector', 'IdentityService', function ($q, $injector, IdentityService) {
      var $state;
      var toastr;
      return {
        'request': function (config) {
          config.headers = config.headers || {};
          if (IdentityService.apiToken) {
            config.headers.Authorization = 'Bearer ' + IdentityService.apiToken;
          }
          return config;
        },
        'responseError': function (response) {
          $state = $state || $injector.get('$state');
          toastr = toastr || $injector.get('toastr');
          if (response.status === 401 || response.status === 403) {
            toastr.error('Please login to continue', 'Error');
            $state.go('login');
          }
          return $q.reject(response);
        }
      };
    }]);
  }

})();
