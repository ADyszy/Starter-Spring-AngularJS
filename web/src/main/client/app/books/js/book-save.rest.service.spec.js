describe('book save rest service', function() {
    'use strict';

    beforeEach(function () {
        module('app.main');
        module('app.books');
    });

     var httpBackend;
        beforeEach(inject(function ($httpBackend) {
        httpBackend = $httpBackend;
     }));

    it('saveBook is defined', inject(function(bookSaveRestService) {
        expect(bookSaveRestService.saveBook).toBeDefined();
    }));

    it('saveBookShould call POST request ..', inject(function(bookSaveRestService) {
        var anAuthorList = [{firstName:'fName', lastName:'lName', id:1}];
        var book = {title: 'aTitle', authors: anAuthorList, id: 1};
        httpBackend.expect('POST', 'context.html/rest/books/book' + book).respond(200, book);
        bookSaveRestService.saveBook(book).then(function(resp) {
            expect(resp.status).toBe(200);
            expect(resp.data).toEqual(book);
        });
    }));
});
