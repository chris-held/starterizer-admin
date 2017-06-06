(function() {
  'use strict';

  angular
    .module('starterizerAdmin')
    .config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider) {
    //$routeProvider
    //  .when('/', {
    //    templateUrl: 'app/main/main.html',
    //    controller: 'MainController',
    //    controllerAs: 'vm'
    //  })
    //  .when('/login', {
    //    templateUrl: 'app/components/login/login.html',
    //    controller: 'LoginController',
    //    controllerAs: 'vm'
    //  })
    //  .otherwise({
    //    redirectTo: '/'
    //  });
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('main', {
        url: "/",
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('login', {
        url: "/login",
        templateUrl: 'app/components/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('user-list', {
        url: "/users",
        templateUrl: 'app/components/users/userList/userList.html',
        controller: 'UserListController',
        controllerAs: 'vm'
      })
      .state('user-create', {
        url: "/users/new",
        templateUrl: 'app/components/users/userCreate/userCreate.html',
        controller: 'UserCreateController',
        controllerAs: 'vm'
      })
      .state('user-detail', {
        url: "/users/:id",
        templateUrl: 'app/components/users/userDetail/userDetail.html',
        controller: 'UserDetailController',
        controllerAs: 'vm'
      })
      .state('request-log-list', {
        url: "/logs",
        templateUrl: 'app/components/requestLogs/requestLogList/requestLogList.html',
        controller: 'RequestLogListController',
        controllerAs: 'vm'
      })
      .state('request-log-detail', {
        url: "/logs/:id",
        templateUrl: 'app/components/requestLogs/requestLogDetail/requestLogDetail.html',
        controller: 'RequestLogDetailController',
        controllerAs: 'vm'
      })
      .state('404', {
        url: "/404",
        templateUrl: 'app/components/errors/404.html'
      })
      .state('500', {
        url: "/500",
        templateUrl: 'app/components/errors/500.html'
      })
    ;
  }

})();
