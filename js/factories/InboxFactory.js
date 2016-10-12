// inbox factory: InboxFactory

angular
  .module('EmailClient')
  .factory('InboxFactory', function InboxFactory($http) {
  
    return {
      getEmails: function() {
        return $http.get('json/emails.json');
      }
    };
    
  });