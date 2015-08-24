angular.module('app.authors').factory('AuthorSearchRestService', function ($http, currentContextPath) {
    'use strict';

    return {
        findAllAuthors: function () {
            return $http.get(currentContextPath.get() + 'rest/authors/all' );
        }
    };
});
