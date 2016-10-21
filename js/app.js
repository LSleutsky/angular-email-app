// main app: EmailClient

(function() {
    
    angular
        .module('EmailClient', ['ngRoute'])
        .config(function($routeProvider) {
            'use strict';

            // setup routes for rendering templates
            $routeProvider
                .when('/inbox', {
                    // main inbox view
                    templateUrl: 'views/inbox.html',
                    controller: 'InboxCtrl'
                })
                .otherwise({
                    // always redirect to main inbox view unless target url is available
                    redirectTo: '/inbox'
                });

        });

})();