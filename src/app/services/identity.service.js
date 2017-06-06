angular.module('starterizerAdmin')
  .factory('IdentityService', ['$window',
    function ($window) {
      return {
        apiToken: $window.localStorage['token'] || null,
        user: $window.localStorage['user'] ? JSON.parse($window.localStorage['user']) : null,
        setToken: function (token) {
          $window.localStorage['token'] = token;
          this.apiToken = token;
        },
        clearToken: function(){
          $window.localStorage['token'] = null;
          this.apiToken = null;
        },
        setUser: function(user) {
          $window.localStorage['user'] = JSON.stringify(user);
          this.user = user
        },
        clearUser: function() {
          $window.localStorage['user'] = null;
          this.user = null;
        }
      }
    }]);