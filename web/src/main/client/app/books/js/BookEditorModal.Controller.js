angular.module('app.books').controller('BookEditorModalController', function ($scope, $modalInstance) {
    'use strict';

    $scope.book = $modalInstance.editedBook;

    $scope.ok = function (book) {
        $modalInstance.close(book);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss();
    };
});
