angular
  .module('app', ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('user', {
          url: '/user/:id',
          templateUrl: 'views/user.html',
          controller: 'UserController',
          resolve: {
              user: function ($http, $stateParams) {
                  return $http.get('http://0.0.0.0:8882/rest/user/' + $stateParams.id);
              }
          }
      });
  });