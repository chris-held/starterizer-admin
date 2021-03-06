angular.module('starterizerAdmin')
  .factory('DashboardService', ['$log', 'Restangular',
    function ($log, Restangular) {

      return {

        users: function(options, cb) {
          Restangular.one('report/users').get()
            .then(function(result){
              $log.log("Got users dashboard data", result);
              cb(null, result)
            })
            .catch(function(err){
              $log.log("Error getting users dashboard data", err);
              cb(err);
            })
        },

        requests: function(options, cb) {
          Restangular.one('report/requests').get()
            .then(function(result){
              $log.log("Got requests dashboard data", result);
              cb(null, result)
            })
            .catch(function(err){
              $log.log("Error getting requests dashboard data", err);
              cb(err);
            })
        }
      }
    }
  ]);