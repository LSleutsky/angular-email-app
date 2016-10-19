// inbox directive: inbox

(function() {
    
    angular
        .module('EmailClient')
        .directive('inbox', function InboxDirective() {
            'use strict';
            
            return {
                restrict: 'EA',
                replace: true,
                scope: true,
                templateUrl: 'js/directives/templates/inbox.html',
                controller: function(InboxFactory) {
                    this.messages = [];
                    InboxFactory.getEmails()
                        .then(angular.bind(this, function then() {
                            this.messages = InboxFactory.messages;
                        }));
                },
                controllerAs: inbox
                
            };
        });
    
})();