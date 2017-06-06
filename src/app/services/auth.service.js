angular.module('starterizerAdmin')
  .factory('AuthService', ['$log', 'Restangular', 'IdentityService', '$window',
    function ($log, Restangular, IdentityService, $window) {

      return {
        login: function(options, cb) {
          var me = this;
          Restangular.one('auth/login/').customPOST(options)
            .then(function(result){
              $log.log("Login result", result);
              if (result.success) {
                //store the API key token using the IdentityService
                IdentityService.setToken(result.token);
                IdentityService.setUser(result.user);
                //$window.localStorage['user'] = JSON.stringify(result.user);
                //me.user = result.user;
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

        register: function(model, cb) {
          var me = this;
          Restangular.one('user/').customPOST(model)
            .then(function(result){
              $log.log("Register result", result);
              cb(null);
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
              if (result.success) {
                IdentityService.clearToken();
                IdentityService.clearUser();
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