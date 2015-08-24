angular.module('app.books').controller('BookSearchController', function ($scope, $window, $location, bookService, Flash, $modal, bookSaveService) {
    'use strict';

    $scope.books = [];
    $scope.gridOptions = { data: 'books' };
    $scope.prefix = '';

    var removeBookById = function (bookId) {
        for (var i = 0; i < $scope.books.length; i = i + 1) {
            if ($scope.books[i].id === bookId) {
                $scope.books.splice(i, 1);
                break;
            }
        }
    };

    $scope.search = function () {
        bookService.search($scope.prefix).then(function (response) {
            angular.copy(response.data, $scope.books);
        }, function () {
            Flash.create('danger', 'Wyjątek', 'custom-class');
        });
    };

    $scope.deleteBook = function (bookId) {
        bookService.deleteBook(bookId).then(function () {
            removeBookById(bookId);
            Flash.create('success', 'Książka została usunięta.', 'custom-class');
        });
    };

    $scope.addBook = function () {
        $location.url('/books/add-book');
    };

    $scope.openModal = function (book) {
        var modalInstance = $modal.open({
            templateUrl: 'books/html/bookEdit-modal.html',
            controller: 'BookEditorModalController'
        });

        modalInstance.editedBook = book;

        modalInstance.result.then(function (book) {
            $scope.bookEditValidation(book);
            $scope.search();
        });
    };

    $scope.bookEditValidation = function(book) {
        if(book.title != "" && book.title!= null) {
            bookSaveService.saveBook(book);
        } else {
            Flash.create('danger', 'Bad input, a book needs an author.', 'custom-class');
        }
    }

});
