// inbox factory: InboxFactory

(function() {
    
    angular
        .module('EmailClient')
        .factory('InboxFactory', ['$http', '$log', '$q', function InboxFactory($http, $log, $q) {
            'use strict';

            var messages = {};
            messages.container = [];

            // messages.getEmails = function() {
            //     // when response is obtained
            //     return $http.get('json/emails.json')
            //         .success(function(response) {
            //             // add response data to messages array
            //             messages.container = response;
            //         })
            //         .error(function(data, status) {
            //             $log.error(data, status);
            //         });
            // };
            messages.getEmails = function() {
                var defer = $q.defer();
                // when response is obtained
                return $http.get('json/emails.json')
                    .success(function(response) {
                        // add response data to messages array
                        messages.container = response;
                        defer.resolve(response);
                    })
                    .error(function(data, status) {
                        $log.error(data, status);
                        defer.reject(data);
                    });
                return defer.promise;
            }; 
            
            return messages;
        }]);
    
})();