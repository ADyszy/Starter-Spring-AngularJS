describe('author search controller', function () {
    'use strict';

    beforeEach(function() {
        module('app.main');
        module('flash');
        module('app.authors');
    });

    var $scope;



    beforeEach(inject(function($rootScope) {
        $scope = $rootScope.$new();
    }));

    it('findAll is defined', inject(function ($controller) {
        // when
        $controller('AuthorSearchController', {$scope: $scope});
        // then
        expect($scope.findAll).toBeDefined();
    }));

    it('findAll should call AuthorSearchServices findAllAuthors.', inject(function ($controller, AuthorSearchService, $q) {
        // given
        $controller('AuthorSearchController', {$scope: $scope});
        var findDeferred = $q.defer();
        var anAuthorList = [{firstName:'fName', lastName:'lName'}];
        var response = { data: anAuthorList };

        // when
        spyOn(AuthorSearchService, 'findAllAuthors').and.returnValue(findDeferred.promise);
        $scope.findAll();
        findDeferred.resolve(response);
        $scope.$digest();

        // then
        expect(AuthorSearchService.findAllAuthors).toHaveBeenCalled();
        expect($scope.authors).toEqual(anAuthorList);
    }));
});
