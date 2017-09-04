'use strict';
app.controller('bookCtrl', function($scope, BookFactory) {

	$scope.booksArr = [];

	let showBooks = function () {
		console.log("showBooks firing");
		BookFactory.getBooks()
		.then((books) => {
			$scope.booksArr = books;
			console.log("booksArr", $scope.booksArr);
		});
	};
	showBooks();
});