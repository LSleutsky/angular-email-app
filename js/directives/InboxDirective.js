// inbox directive: inbox

(function() {
    
    angular
        .module('EmailClient')
        .directive('inbox', function InboxDirective() {
            'use strict';
            
            return {
                restrict: 'E',
                replace: true,
                scope: true,
                templateUrl: 'js/directives/templates/inbox.html',
                controller: function(InboxFactory) {
                    // empty container to hold incoming back-end data
                    this.container = [];
                    
                    InboxFactory.getEmails()
                        // if data is properly retrieved
                        .success(angular.bind(this, function() {
                            // bind the data to the above container
                            this.container = InboxFactory.container;
                        }))
                        .error(function(data, status) {
                            // log any errors to the console
                            console.log(data, status);
                        });
                },
                controllerAs: 'inbox'
            };
        });
    
})();