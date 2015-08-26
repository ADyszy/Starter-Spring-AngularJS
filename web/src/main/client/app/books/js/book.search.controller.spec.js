describe('book search controller', function () {
    'use strict';

    beforeEach(function () {
        module('app.main');
        module('flash');
        module('app.books');
    });

    var $scope;



    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope.$new();
    }));

    it('search is defined', inject(function ($controller) {
        // when
        $controller('BookSearchController', {$scope: $scope});
        // then
        expect($scope.search).toBeDefined();
    }));

    it('delete book should call bookService.deleteBook', inject(function ($controller, $q, bookService, Flash) {
        // given
        $controller('BookSearchController', {$scope: $scope});

        var bookId = 1;
        $scope.books = [{id: bookId, title: 'test'}];
        var deleteDeferred = $q.defer();
        spyOn(bookService, 'deleteBook').and.returnValue(deleteDeferred.promise);
        spyOn(Flash, 'create');
        // when
        $scope.deleteBook(bookId);
        deleteDeferred.resolve();
        $scope.$digest();
        // then
        expect(bookService.deleteBook).toHaveBeenCalledWith(bookId);
        expect(Flash.create).toHaveBeenCalledWith('success', 'Książka została usunięta.', 'custom-class');
        expect($scope.books.length).toBe(0);
    }));

    it('search should call bookService.search with empty prefix', inject(function ($controller, $q, bookService) {
        // given
        $controller('BookSearchController', {$scope: $scope});
        $scope.prefix = '';
        var deferred = $q.defer();
        spyOn(bookService, 'search').and.returnValue(deferred.promise);
        // when
        $scope.search();
        // then
        expect(bookService.search).toHaveBeenCalledWith('');
    }));

    it('search should call bookService.search with changed prefix', inject(function ($controller, $q, bookService) {
        // given
        $controller('BookSearchController', {$scope: $scope});
        $scope.prefix = 'asd';
        var deferred = $q.defer();
        spyOn(bookService, 'search').and.returnValue(deferred.promise);
        // when
        $scope.search();
        // then
        expect(bookService.search).toHaveBeenCalledWith('asd');
    }));

    it('search should fill books with a found book', inject(function ($controller, $q, bookService) {
        //given
        var aBookList = [{id:1, title:'aBook', authors:null}];
        $scope.books = aBookList;
        $controller('BookSearchController', {$scope: $scope});
        var deferred = $q.defer();
        spyOn(bookService, 'search').and.returnValue(deferred.promise);

        //when
        $scope.search();
        deferred.resolve({data: aBookList});
        $scope.$digest();

        //then
        expect($scope.books.length).toBe(1);
    }));

    it ('openModal should open modal and edit book', inject(function ($controller, $q, $modal, bookSaveService) {
        // given
        var book = {title:'aTitle', authors:null};
        var newTitle = 'aNewTitle';
        var newBook = book; newBook.title = newTitle;
        $scope.search = function () {};
        $scope.bookEditForm = { $valid:true };

        $controller('BookSearchController', {$scope: $scope});

        var editModalDeferred = $q.defer();
        spyOn($modal, 'open').and.returnValue({result: editModalDeferred.promise});
        spyOn(bookSaveService, 'saveBook');

        // when
        $scope.openModal(book);
        $scope.bookEditValidation(book, newTitle);

        // then
        expect(bookSaveService.saveBook).toHaveBeenCalledWith(newBook);
    }));

     it ('openModal should open modal and edit book', inject(function ($controller, $q, $modal, bookSaveService) {
         // given
         var book = {title:'badTitle or sth..', authors:null};
         var newTitle = 'aNewTitle';
         var newBook = book; newBook.title = newTitle;
         $scope.search = function () {};
         $scope.bookEditForm = { $valid:false };
         $controller('BookSearchController', {$scope: $scope});
         var editModalDeferred = $q.defer();
         spyOn($modal, 'open').and.returnValue({result: editModalDeferred.promise});
         spyOn(bookSaveService, 'saveBook');
           // when
         $scope.openModal(book);
         $scope.bookEditValidation(book, newTitle);

         // then
         expect(bookSaveService.saveBook.calls.any()).toBe(false);
     }));

});
