describe('author search service', function () {
    'use strict';

    var AuthorSearchService;

    beforeEach(function () {
        module('app.main');
        module('app.authors');
    });

    var $scope;

    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope.$new();
    }));

    beforeEach(inject(function ($injector) {
        AuthorSearchService = $injector.get('AuthorSearchService');
    }));

    it('findAllAuthors should call AuthorSearchRestService.findAllAuthors', inject(function ($q, AuthorSearchRestService) {
        // given
        var srchDeferred = $q.defer();
        spyOn(AuthorSearchRestService, 'findAllAuthors').and.returnValue(srchDeferred.promise);
        // when
        AuthorSearchService.findAllAuthors();
        srchDeferred.resolve();
        $scope.$digest();
        // then
        expect(AuthorSearchRestService.findAllAuthors).toHaveBeenCalled();
    }));

});
