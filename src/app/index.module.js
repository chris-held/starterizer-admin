(function() {
  'use strict';

  angular
    .module('starterizerAdmin', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ngRoute', 'ui.router', 'ngMaterial', 'toastr'])
    .controller('ApplicationController', ['$rootScope', 'AuthService', '$state', 'toastr', '$mdSidenav', '$log', function($rootScope, AuthService, $state, toastr, $mdSidenav, $log){
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
      vm.logout = function(){
        AuthService.logout(function(err){
          if (err) {
            toastr.error(err, "Error")
          } else {
            vm.user = null;
            $state.go("login");
          }
        });
      };
      vm.toggleList = function(){
        $mdSidenav('left')
          .toggle()
          .then(function () {
            $log.log('Sidenav toggled');
          });
      };
    }]);

})();
