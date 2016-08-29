angular
  .module('app', ['ui.router'])
  .service('UserService', function($http) {
    this.getUser = function (name) {
      return $http.get('http://0.0.0.0:8882/rest/user/' + name);
    }
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('user', {
	url: '/user/:id',
	templateUrl: 'views/user.html',
	controller: 'UserController as user',
	resolve: {
	  user: function($route, UserService) {
	    return UserService.getUser($route.current.params.id).data;
	  }
	}
      });
  })

