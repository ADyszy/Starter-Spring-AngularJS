describe('book save controller', function () {
    'use strict';

    beforeEach(function () {
        module('app.main');
        module('flash');
        module('app.books');
    });

    var $scope;

    var ok = function () {};


    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope.$new();
    }));

   var formAuthor = {name:'', lastname:''};

    it('saveBook is defined', inject(function ($controller) {
        // when
        $controller('BookSaveController', {$scope: $scope});
        // then
        expect($scope.saveBook).toBeDefined();
    }));

    it('saveBook should call bookSaveService.saveBook', inject(function ($controller, $q, bookSaveService) {
        // given
        $controller('BookSaveController', {$scope: $scope});
        var book = {id: 1, title: 'test'};
        var deferred = $q.defer();
        spyOn(bookSaveService, 'saveBook').and.returnValue(deferred.promise);
        // when
        $scope.saveBook(book);
        deferred.resolve();
        $scope.$digest();
        // then
        expect(bookSaveService.saveBook).toHaveBeenCalledWith(book);
    }));

    it('search should crate danger Flash because of invalid book', inject(function ($controller, $q, bookService, Flash) {
        // given
        $controller('BookSaveController', {$scope: $scope});
        $scope.bookForm = { $valid : false };
        $scope.authorList = [];
        $scope.title = 'title';
        var deferred = $q.defer();
        spyOn(Flash, 'create').and.returnValue(deferred.promise);
        // when
        $scope.saveValidBook();
        deferred.resolve();
        $scope.$digest();
        // then
        expect(Flash.create).toHaveBeenCalledWith('danger', 'There is some invalid or incomplete data.', 'custom-class');
    }));

    it('search should crate success Flash because of valid book and call scope.saveBook', inject(function ($controller, $q, Flash) {
       // given
       $controller('BookSaveController', {$scope: $scope});
       $scope.bookForm = { $valid : true };
       $scope.authorList = [{firstName:'A', lastName:'B', id:null}];
       $scope.title = 'title';
       var book = {title:$scope.title, authors:$scope.authorList, id:null};
       var deferred = $q.defer();
       spyOn(Flash, 'create');
       spyOn($scope, 'saveBook').and.returnValue(deferred.promise);
       // when
       $scope.saveValidBook();
       deferred.resolve();
       $scope.$digest();
       // then
       expect(Flash.create).toHaveBeenCalledWith('success', 'Book has been succesfully added.', 'custom-class');
       expect($scope.saveBook).toHaveBeenCalledWith(book);
    }));

    it('addAuthor is defined', inject(function ($controller) {
        // when
        $controller('BookSaveController', {$scope: $scope});
        // then
        expect($scope.addAuthor).toBeDefined();
    }));

    it('addAuthor should add author to authorList', inject(function ($controller) {
        // when
        var anAuthor = {firstName:'A', lastName:'B', id:null};
        $controller('BookSaveController', {$scope: $scope});
        $scope.addAuthor(anAuthor);
        // then
        expect($scope.authorList.length).toBe(1);
    }));

    it('addValidAuthor should not call addAuthor because of invalid form', inject(function ($controller, $q) {
        // given
        var anAuthor = {firstName:'A', lastName:'B', id:null};
        $controller('BookSaveController', {$scope: $scope});
        $scope.authorForm = { $valid : false };
        var deferred = $q.defer();
        spyOn($scope, 'addAuthor').and.returnValue(deferred.promise);
        // when
        $scope.addValidAuthor(anAuthor);
        deferred.resolve();
        $scope.$digest();
        // then
        expect($scope.addAuthor.calls.any()).toBe(false);
    }));

    it('addValidAuthor should call addAuthor because of valid form', inject(function ($controller, $q) {
        // given
        var anAuthor = {firstName:'A', lastName:'B', id:null};
        $controller('BookSaveController', {$scope: $scope});
        $scope.author = formAuthor;
        $scope.authorForm = { $valid : true };
        var deferred = $q.defer();
        spyOn($scope, 'addAuthor').and.returnValue(deferred.promise);
        // when
        $scope.addValidAuthor(anAuthor);
        deferred.resolve();
        $scope.$digest();
        // then
        expect($scope.addAuthor).toHaveBeenCalledWith(anAuthor);
    }));

    it('saveValidAuthor should communicate = save author with success', inject(function ($controller, Flash) {
        // given
        var anAuthor = {firstName:'A', lastName:'B', id:null};
        $controller('BookSaveController', {$scope: $scope});
        $scope.ok = ok;
        $scope.author = {name:'name', lastname:'lastname', id:1};
        $scope.authorForm = { $valid : true };
        spyOn(Flash, 'create');
        // when
        $scope.addValidAuthor(anAuthor);
        $scope.saveValidAuthor();
        // then
        expect(Flash.create).toHaveBeenCalledWith('success', 'Author has been succesfully added.', 'custom-class');
        expect($scope.authorList.length).toBe(1);
    }));

    it('saveValidAuthor should communicate = save author with no success', inject(function ($controller, Flash) {
        // given
        var anAuthor = {firstName:'A', lastName:'B', id:null};
        $controller('BookSaveController', {$scope: $scope});
        $scope.ok = ok;
        $scope.author = {name:'name', lastname:'lastname', id:1};
        $scope.authorForm = { $valid : false };
        spyOn(Flash, 'create');
        // when
        $scope.addValidAuthor(anAuthor);
        $scope.saveValidAuthor();
        // then
        expect(Flash.create).toHaveBeenCalledWith('danger', 'No authors added.', 'custom-class');
        expect($scope.authorList.length).toBe(0);
    }));

    it('should open the modal and update author list', inject(function ($controller, $q, $modal){
        // given
        var authors = [{firstName:'A', lastName:'B', id:null}];
        $controller('BookSaveController', {$scope: $scope});
        var modalDeferred = $q.defer();
        spyOn($modal, 'open').and.returnValue({result: modalDeferred.promise});
        //when
        $scope.openModal();
        modalDeferred.resolve(authors);
        $scope.$digest();
        // then
        expect($modal.open).toHaveBeenCalled();
        expect($scope.authorList.length).toBe(1);
    }));

});
