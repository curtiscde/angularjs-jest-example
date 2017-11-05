angular.module('myapp', [])
  .factory('myservice', function(){

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
