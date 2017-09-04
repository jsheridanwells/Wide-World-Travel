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

app.factory('BookFactory', function($q, $http){
	let getBooks = function() {
		console.log("getBooks firing");
		return $q((resolve, reject) => {
			$http.get('../data/guides.json')
			.then((books) => {resolve(books.data.guides);})
			.catch((error) => {
				reject(error);
			});
		});
	};
	return {getBooks};
});