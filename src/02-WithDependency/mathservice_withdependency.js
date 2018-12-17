angular.module('mathmodule_withdependency', [])
  .factory('mathservice_withdependency', function(){

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