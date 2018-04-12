(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('StatusCtrl', Controller);

    Controller.$inject = ['StatusSrvc', 'NotifySrvc'];

    function Controller(StatusSrvc, NotifySrvc) {
        var $ctrl = this;

        $ctrl.status = {};

        $ctrl.check = function() {

            StatusSrvc.status().then(function(res) {
                $ctrl.status.data = res.data;
                $ctrl.status.headers = res.config.headers;
                NotifySrvc.success('Status: ' + res.data.status);

            }, function(err) {
                $ctrl.status = err;
                NotifySrvc.error(err.status + ', ' + err.statusText);
            });
        };
    }
})();
