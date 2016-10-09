// main app: EmailClient

angular.module('EmailClient', [
  'ngRoute'
])

.config(function($routeProvider) {
  
  $routeProvider
    .when('/inbox', {
      templateUrl: 'views/inbox.html',
      controller: 'InboxCtrl'
    })
    .otherwise({
      redirectTo: '/inbox'
    });

});