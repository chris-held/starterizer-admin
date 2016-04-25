(function() {
  'use strict';

  angular
    .module('starterizerAdmin', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ngRoute', 'ui.router', 'ngMaterial', 'toastr'])
    .controller('ApplicationController', ['$rootScope', function($rootScope){
      var vm = this;
      vm.user = null;
      $rootScope.$on('authenticated', function(e, user){
        vm.user = user;
        vm.isSuperadmin = _.find(user.roles, function(r){
          return r === "superadmin";
        });
      });
      $rootScope.$on('unauthenticated', function(){
        vm.user = null;
      });
    }]);

})();
