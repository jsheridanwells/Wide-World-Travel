'use strict';
app.controller('bookCtrl', function($scope, BookFactory) {

	$scope.booksArr = [];

	let showBooks = function () {
		BookFactory.getBooks()
		.then((books) => {
			$scope.booksArr = books;
		});
	};
	showBooks();
});