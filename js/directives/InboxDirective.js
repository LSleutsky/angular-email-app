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
                    this.container = [];
                    InboxFactory.getEmails()
                        .then(angular.bind(this, function then() {
                            this.container = InboxFactory.container;
                        }));

                    // var holder = {};
                    // holder.messages = [];
                    // 
                    // holder.getEmails = function() {
                    //     // when response is obtained
                    //     $http.get('json/emails.json')
                    //         .success(function(response) {
                    //             // add response data to messages array
                    //             holder.messages = response;
                    //         })
                    //         .error(function(data, status) {
                    //             $log.error(data, status);
                    //         });
                    // };
                    // return holder;
                },
                controllerAs: 'inbox'
            };
        });
    
})();