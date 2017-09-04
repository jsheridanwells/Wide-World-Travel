'use strict';

app.factory('BookFactory', function($q, $http){
	let getBooks = function() {
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