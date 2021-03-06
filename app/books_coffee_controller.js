// Generated by CoffeeScript 1.7.1
var bookly;

bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  $scope.books = books;
  $scope.cart = [];
  $scope.total = 0;
  $scope.quantity = [];
  $scope.num_books_in_cart = 0;
  $scope.addItem = function(book) {
    var id;
    $scope.cart.push(book);
    $scope.cart = _.uniq($scope.cart);
    id = book.id;
    if ($scope.quantity[id] === void 0) {
      $scope.quantity[id] = 1;
    } else {
      $scope.quantity[id] += 1;
    }
    $scope.num_books_in_cart += 1;
    $scope.total += book.price;
  };
  $scope.emptyCart = function() {
    $scope.cart = [];
    $scope.total = 0;
  };
};
