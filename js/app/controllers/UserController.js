function UserController(test) {
  console.log(test)
}

angular
	.module('app')
	.controller('UserController', UserController);
