angular
  .module('app', ['ui.router'])
  .config(function($stateProvider){
    $stateProvider
      .state('user', {
        url: '/user/:id',
        templateUrl: 'views/user.html',
        controller: 'UserController',
        resolve: {
          test: function(){ return 'test'; }
        }
      });
  });
