angular.module('starterizerAdmin')
  .factory('IdentityService', ['$window',
    function ($window) {
      return {
        apiToken: $window.localStorage['token'] || null,
        setToken: function (token) {
          $window.localStorage['token'] = token;
          this.apiToken = token;
        },
        clearToken: function(){
          $window.localStorage['token'] = null;
          this.apiToken = null;
        }
      }
    }]);