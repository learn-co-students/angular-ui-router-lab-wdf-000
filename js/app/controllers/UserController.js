function UserController(user) {
	var ctrl = this;
	console.log(user);

	ctrl.user = user.data;
}

angular
	.module('app')
	.controller('UserController', UserController);