angular.module('app.authors').controller('AuthorSearchController', function ($scope, AuthorSearchService) {
    'use strict';

    $scope.authors = [];

    $scope.findAll = function() {
        AuthorSearchService.findAllAuthors().then(function (response) {
            angular.copy(response.data, $scope.authors);
        });
    };
});
