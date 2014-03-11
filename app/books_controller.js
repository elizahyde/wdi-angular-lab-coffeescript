var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  $scope.cart = [];

  //Code to manage cart goes here

  // Add book to cart
  $scope.addItem = function( book ) {
    $scope.cart.push(book);
  };

  $scope.totalCartValue = function() {
     // Insert math here
  }

  $scope.emptyCart = function() {
    // Empty the cart
  }

};
