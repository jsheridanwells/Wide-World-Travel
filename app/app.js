'use strict';
let app = angular.module('Books', ['ngRoute']);

app.config(($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'index.html',
		controller: 'userCtrl'
	})
	.otherwise('/');
});