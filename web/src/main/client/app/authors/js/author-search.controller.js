angular.module('app.authors').controller('AuthorSearchController', function ($scope, AuthorSearchService) {
    'use strict';

    $scope.authors = [];

    $scope.findAll = function() {
        AuthorSearchService.findAllAuthors().then(function (response) {
            angular.copy(response.data, $scope.authors);
        });
    };

    $scope.filter = '$';
    $scope.search = {firstName:'', lastName:'', $:''};
    $scope.changeFilterTo = function(f) {
        $scope.filter = f;
    };

});
