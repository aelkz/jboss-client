(function () {
    'use strict';

    angular.module('patternfly.app')
        .factory('AuthSrvc', Service);

    // AUTH is a constant that is defined in bootstrap.js
    Service.$inject = ['AUTH'];

    function Service(AUTH) {

        return AUTH;
    }
})();