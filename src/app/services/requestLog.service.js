angular.module('starterizerAdmin')
  .factory('RequestLogService', ['$log', 'Restangular',
    function ($log, Restangular) {

      return {

        list: function(options, cb) {
          Restangular.all('requestlog').get('', options)
            .then(function(result){
              $log.log('Request Log list result', result);
              return cb(null, result);
            })
            .catch(function(err){
              $log.log('Request Log list err', err);
              return cb("Unable to retrieve Request Logs");
            })
        },

        get: function(options, cb) {
          Restangular.one('requestlog', options.id).get()
            .then(function(result){
              $log.log('Request Log get result', result);
              return cb(null, result);
            })
            .catch(function(err){
              $log.log('Request Log get err', err);
              return cb("Unable to retrieve Request Log");
            })
        }
      }
    }
  ]);