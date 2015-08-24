angular.module('app.authors').factory('AuthorSearchService', function (AuthorSearchRestService) {
    'use strict';

    return {
        findAllAuthors: function () {
            return AuthorSearchRestService.findAllAuthors();
        }
    };

});
