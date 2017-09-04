'use strict';
let app = angular.module('Books', ['ngRoute']);

app.config(($routeProvider) => {
	$routeProvider
	.when('/guides', {
		templateUrl: 'partials/book-view.html',
		controller: 'bookCtrl'
	})
	.otherwise('/');
});