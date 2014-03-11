var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  $scope.books = books;
  $scope.cart = [];
  $scope.total = 0;
  // Add book to cart
  $scope.addItem = function( book ) {
    $scope.cart.push(book);
    // Breaks pluralize but fixes JS error
    // $scope.cart = _.uniq($scope.cart);

    // Get total cost
    $scope.total += book.price;
  };

  $scope.emptyCart = function() {
    $scope.cart = 0;
    $scope.total = 0;
  };

};
