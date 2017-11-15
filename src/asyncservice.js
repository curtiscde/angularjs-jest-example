angular.module('asyncmodule', [])
  .factory('asyncservice', function($q){

    var concatStrings = function(strings){

      var defer = $q.defer();

      var s;

      for(var i=0; i<s.length; i++){
        s += (strings[i] || '');
      }

      defer.resolve(s);

      return defer.promise;
    };

    return {
      concatStrings
    };
  });
