// inbox controller: InboxCtrl

(function() {
    
    angular
        .module('EmailClient')
        .controller('InboxCtrl', ['$scope', function InboxCtrl($scope) {
            'use strict';
            
            $scope.title = "My Inbox";
            
        }]);    
    
})();