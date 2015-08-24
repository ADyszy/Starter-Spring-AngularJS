angular.module('app.books').controller('AuthorAdderModalController', function ($scope, $modalInstance) {
    'use strict';

    $scope.ok = function (authorList) {
      $modalInstance.close(authorList);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss();
    };

});
