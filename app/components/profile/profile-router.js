(function() {
    'use strict';

    angular.module('patternfly.app')
        .config(Router);

    Router.$inject = ['$stateProvider'];

    function Router($stateProvider) {

        $stateProvider
            .state({
                name: 'profile',
                url:'/profile',
                component: 'appProfile',
                ncyBreadcrumb: {
                    label: 'Profile',
                    parent: 'home'
                }
            });

    }
})();