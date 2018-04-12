(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('ProfileCtrl', Controller);

    Controller.$inject = ['AuthSrvc'];

    function Controller(AuthSrvc) {
        var $ctrl = this;

        $ctrl.profile = {};

        if(AuthSrvc.loggedIn) {
            $ctrl.profile = AuthSrvc.profile;
        }
    }
})();