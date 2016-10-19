// inbox factory: InboxFactory

(function() {
    
    angular
        .module('EmailClient')
        .factory('InboxFactory', function InboxFactory($q, $http) {
            'use strict';

            var externals = {};
            externals.messages = [];

            externals.getEmails = function() {
                // when response is obtained
                return $http.get('json/emails.json')
                    .then(function(response) {
                        // add response data to messages array
                        externals.messages = response.data;
                    });
            };
            return externals;
        });
    
})();