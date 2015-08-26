describe('book save service', function () {
    'use strict';

    var bookSaveService;

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
        bookSaveService = $injector.get('bookSaveService');
    }));

    it('save book should call bookRestService.saveBook', inject(function ($q, bookSaveRestService) {
        // given
        var book = {id: 1, title: 'test'};
        var deleteDeferred = $q.defer();
        spyOn(bookSaveRestService, 'saveBook').and.returnValue(deleteDeferred.promise);
        // when
        bookSaveService.saveBook(book);
        deleteDeferred.resolve();
        $scope.$digest();
        // then
        expect(bookSaveRestService.saveBook).toHaveBeenCalledWith(book);
    }));

});
