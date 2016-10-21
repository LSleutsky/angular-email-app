// inbox factory: InboxFactory

(function() {
    
    angular
        .module('EmailClient')
        .factory('InboxFactory', ['$http', '$log', function InboxFactory($http, $log) {
            'use strict';

            var messages = {};
            messages.container = [];

            messages.getEmails = function() {
                // when response is obtained
                return $http.get('json/emails.json')
                    .success(function(response) {
                        // add response data to message container array
                        messages.container = response;
                    })
                    .error(function(data, status) {
                        // log any errors to console
                        $log.error(data, status);
                    });
            };            
            return messages;
        }]);
    
})();