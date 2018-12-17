angular.module('mathmodule', [])
  .factory('mathservice', function(){

    var addTwoNumbers = function(x, y){
      return x + y;
    };

    var multiplyTwoNumbers = function(x, y){
      return x * y;
    };

    return {
      addTwoNumbers,
      multiplyTwoNumbers
    };
  });