// inbox factory: InboxFactory

angular
    .module('EmailClient')
    .factory('InboxFactory', function InboxFactory($q, $http) {
        'use strict';
        
        var externals = {};
        externals.messages = [];
        
        externals.getEmails = function() {
            // when response is obtained
            return $http.get('json/emails.json')
                .success(function(data) {
                    // add response data to messages array
                    externals.messages = data;
                });
        };
        return externals;
    });