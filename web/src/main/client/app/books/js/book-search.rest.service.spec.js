describe('book search rest service', function() {
    'use strict';

    beforeEach(function () {
        module('app.main');
        module('app.books');
    });

     var httpBackend;
        beforeEach(inject(function ($httpBackend) {
        httpBackend = $httpBackend;
     }));

     it('search is defined', inject( function (bookRestService) {
        expect(bookRestService.search).toBeDefined();
     }));

     it('deleteBook is defined', inject( function (bookRestService) {
        expect(bookRestService.deleteBook).toBeDefined();
     }));


     it('search should call GET request .. ', inject( function(bookRestService) {
        var titlePrefix = 'anyTitlePrefix';
        var anAuthorList = [{firstName:'fName', lastName:'lName', id:1}];
        var books = [{title: 'aTitle', authors: anAuthorList, id: 1}];
        httpBackend.expect('GET', '/context.html/rest/books/books-by-title' + titlePrefix).respond(200, books);
        bookRestService.search().then(function(resp) {
            expect(resp.status).toBe(200);
            expect(resp.data).toEqual(books);
        });
     }));

     it('deleteBook should call DELETE request .. ', inject( function(bookRestService) {
        var bookID = 1;
        httpBackend.expect('DELETE', '/context.html/rest/books/book/' + bookID).respond(200);
        bookRestService.search().then(function(resp) {
            expect(resp.status).toBe(200);
        });
     }));

});
