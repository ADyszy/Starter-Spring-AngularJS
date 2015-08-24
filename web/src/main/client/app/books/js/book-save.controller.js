angular.module('app.books').controller('BookSaveController', function ($scope, bookSaveService, $modal, Flash) {
    'use strict';

    $scope.authorList = [];
    $scope.modalInstance;
    $scope.books = [];
    $scope.gridOptions = { data: 'books' };
    $scope.prefix = '';


    $scope.saveBook = function (book) {
        bookSaveService.saveBook(book);
    };

    $scope.openModal = function () {
        var modalInstance = $modal.open({
        templateUrl: 'books/html/book-modal.html',
        controller: 'AuthorAdderModalController'
        });

        modalInstance.result.then(function (authorList) {
              $scope.authorList = authorList;
        });
    };

    $scope.addAuthor = function (author) {
        $scope.authorList.push({name : author.name, lastname : author.lastname});
    };

    $scope.saveValidBook = function() {
        if ($scope.bookForm.$valid && $scope.authorList.length > 0) {
            // TODO : handle the authors field..
            var newBook = {'title':$scope.title, 'authors':'nonono'};
            $scope.saveBook(newBook);
            Flash.create('success', 'Book has been succesfully added.', 'custom-class');
            $scope.reset();
        } else {
            Flash.create('danger', 'There is some invalid or incomplete data.', 'custom-class');
        }
    };

    $scope.reset = function() {
            $scope.user = '';
    };

    $scope.saveValidAuthor = function(author) {
        if ($scope.authorList.length > 0) {
            Flash.create('success', 'Author has been succesfully added.', 'custom-class');
        } else {
            Flash.create('danger', 'No authors added.', 'custom-class');
        }
        $scope.ok($scope.authorList);
        $scope.reset();
    };

     $scope.clearAuthorForm = function() {
            $scope.author.name = '';
            $scope.author.lastname = '';
     };

    $scope.addValidAuthor = function(author) {
        if ($scope.authorForm.$valid) {
            $scope.addAuthor(author);
            $scope.reset();
            $scope.clearAuthorForm();
        }
    };
});

