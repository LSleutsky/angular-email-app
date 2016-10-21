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



// copyright info added to bottom of index.html - outside of angular scope
var date = new Date();
var year = date.getFullYear();
var copyrightDate = document.getElementById('copyright');
copyrightDate.innerHTML = year;