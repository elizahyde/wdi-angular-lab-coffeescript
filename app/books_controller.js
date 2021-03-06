var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  $scope.books = books;
  $scope.cart = [];
  $scope.total = 0;
  $scope.quantity = [];
  $scope.num_books_in_cart = 0;
  // Add book to cart
  $scope.addItem = function( book ) {
    $scope.cart.push(book);
    $scope.cart = _.uniq($scope.cart);
    var id = book.id;
    if ($scope.quantity[id] === undefined) {
      $scope.quantity[id] = 1;
    } else {
      $scope.quantity[id] += 1;
    }
    $scope.num_books_in_cart += 1;
    // Get total cost
    $scope.total += book.price;
  };

  $scope.emptyCart = function() {
    $scope.cart = [];
    $scope.total = 0;
  };

};