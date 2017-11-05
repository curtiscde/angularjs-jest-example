angular.module('stringmodule', [])
  .factory('stringservice', function(){

    var addTwoStrings = function(x, y){
      return (x || '') + (y || '');
    };

    var stringContainsValue = function(x, y){
      return x.indexOf(y)>=0;
    };

    return {
      addTwoStrings,
      stringContainsValue
    };
  });
