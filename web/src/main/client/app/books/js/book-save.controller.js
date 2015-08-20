angular.module('app.books').controller('BookSaveController', function ($scope, bookSaveService) {
    'use strict';

    $scope.books = [];
    $scope.gridOptions = { data: 'books' };
    $scope.prefix = '';

    $scope.saveBook = function (book) {
        bookSaveService.saveBook(book);
    };

});
