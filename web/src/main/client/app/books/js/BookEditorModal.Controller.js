angular.module('app.books').controller('BookEditorModalController', function ($scope, $modalInstance) {
    'use strict';

    $scope.book = $modalInstance.editedBook;

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss();
    };
});
