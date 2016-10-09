// inbox controller: InboxCtrl

angular.module('EmailClient')

.controller('InboxCtrl', function InboxCtrl($scope, InboxFactory) {
  
  $scope.title = "My Inbox";
  InboxFactory.getEmails().success(function(data) {
    debugger;
  });
  
});