angular.module('starterizerAdmin')
  .factory('UserService', ['$log', 'Restangular',
    function ($log, Restangular) {

      return {

        list: function(options, cb) {
          Restangular.all('user').get('', options)
            .then(function(result){
              $log.log('User list result', result);
              return cb(null, result);
            })
            .catch(function(err){
              $log.log('User list err', err);
              return cb("Unable to retrieve users lists");
            })
        },

        get: function(options, cb) {
          Restangular.one('user', options.id).get()
            .then(function(result){
              $log.log('User get result', result);
              return cb(null, result);
            })
            .catch(function(err){
              $log.log('User get err', err);
              return cb("Unable to retrieve user");
            })
        }
      }
    }
  ]);