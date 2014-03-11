bookly = bookly or {}

bookly.bookApp = angular.module "bookApp",[]

bookly.BooksController = ($scope) ->
  $scope.books = books
  $scope.cart = []
  $scope.total = 0
  $scope.quantity = [];
  $scope.num_books_in_cart = 0;
  $scope.addItem = (book) ->
    $scope.cart.push book
    $scope.cart = _.uniq $scope.cart
    id = book.id

    if $scope.quantity[id] is undefined
      $scope.quantity[id] = 1
    else
      $scope.quantity[id] += 1

    $scope.num_books_in_cart += 1
    $scope.total += book.price
    true

  $scope.emptyCart = () ->
    $scope.cart = []
    $scope.total = 0
    true
  true