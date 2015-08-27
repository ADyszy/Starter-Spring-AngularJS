describe('author search rest service', function() {
    'use strict';

    beforeEach(function () {
        module('app.main');
        module('app.authors');
    });

    var httpBackend;
    beforeEach(inject(function ($httpBackend) {
        httpBackend = $httpBackend;
    }));

    it('findAllAuthors Is Defined', inject( function (AuthorSearchRestService) {
        expect(AuthorSearchRestService.findAllAuthors).toBeDefined();
    }));

    it('findAllAuthors should call GET request for URL', inject (function(AuthorSearchRestService){
        var anAuthorList = [{firstName:'fName', lastName:'lName', id:1}];
        httpBackend.expect('GET', '/context.html/rest/authors/all').respond(200, anAuthorList);
        AuthorSearchRestService.findAllAuthors().then(function(response) {
            expect(response.status).toBe(200);
            expect(response.data).toEqual(anAuthorList);
        });
        httpBackend.flush();
    }));


});
