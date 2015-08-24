angular.module('app.books').controller('AuthorAdderModalController', function ($scope, $modalInstance) {

    $scope.ok = function (authorList) {
      $modalInstance.close(authorList);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss();
    };

});
