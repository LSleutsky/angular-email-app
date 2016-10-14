// inbox directive: inbox

angular
    .module('EmailClient')
    .directive('inbox', function InboxDirective() {
        'use strict';
        return {
            restrict: 'EA',
            replace: true,
            scope: true,
            templateUrl: 'directives/templates/inbox.html',
            controller: 'InboxCtrl'
        };
    });