angular.module('app.books').factory('bookSaveService', function (bookSaveRestService) {
    'use strict';

    return {
        saveBook: function (book) {
            return bookSaveRestService.saveBook(book);
        }
    };
});
