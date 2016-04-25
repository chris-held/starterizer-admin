angular.module('starterizerAdmin')
  .factory('AuthService', ['$log', 'Restangular', 'IdentityService', '$window',
    function ($log, Restangular, IdentityService, $window) {

      return {
        user: $window.localStorage['user'] ? JSON.parse($window.localStorage['user']) : null,
        login: function(options, cb) {
          var me = this;
          Restangular.one('auth/login/').customPOST(options)
            .then(function(result){
              $log.log("Login result", result);
              if (result.success) {
                //store the API key token using the IdentityService
                IdentityService.setToken(result.token);
                $window.localStorage['user'] = JSON.stringify(result.user);
                cb(null, result.user);
              } else {
                cb("Unable to authenticate. Please make sure your username and password are correct.");
              }

            })
            .catch(function(error){
              $log.log("Login error", error);
              return cb(error);
            });
        },

        logout: function(cb) {
          var me = this;
          Restangular.one('auth/logout/').customPOST()
            .then(function(result){
              $log.log("Logout result", result);
              IdentityService.clearToken();
              if (result.success) {
                $window.localStorage['user'] = null;
                return cb(null, result);
              } else {
                return cb(result.message || "Logout failed. Please try again")
              }
            })
            .catch(function(error){
              $log.log("Logout error", error);
              return cb("Logout failed. Please try again");
            });
        }
      }
    }
  ]);