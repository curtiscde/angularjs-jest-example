angular.module('myapp', [])
  .factory('myservice', function(){

    var addTwoNumbers = function(x, y){
      return x + y;
    };

    return {
      addTwoNumbers
    };
  });
