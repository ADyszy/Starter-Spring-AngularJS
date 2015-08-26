describe('book search service', function () {
    'use strict';

    var bookService;

    beforeEach(function () {
        module('app.main');
        module('flash');
        module('app.books');
    });

    var $scope;

    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope.$new();
    }));

    beforeEach(inject(function ($injector) {
        bookService = $injector.get('bookService');
    }));

    it('delete book should call bookRestService.deleteBook', inject(function ($q, bookRestService) {
        // given
        var bookID = 1;
        var deleteDeferred = $q.defer();
        spyOn(bookRestService, 'deleteBook').and.returnValue(deleteDeferred.promise);
        // when
        bookService.deleteBook(bookID);
        deleteDeferred.resolve();
        $scope.$digest();
        // then
        expect(bookRestService.deleteBook).toHaveBeenCalledWith(bookID);
    }));

    it('search should call bookRestService.search', inject(function ($q, bookRestService) {
        // given
        var aPrefix = 'aPrefix';
        var deleteDeferred = $q.defer();
        spyOn(bookRestService, 'search').and.returnValue(deleteDeferred.promise);
        // when
        bookService.search(aPrefix);
        deleteDeferred.resolve();
        $scope.$digest();
        // then
        expect(bookRestService.search).toHaveBeenCalledWith(aPrefix);
    }));
});
