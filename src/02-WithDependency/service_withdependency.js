angular.module('module_withdependency', ['mathmodule'])
  .factory('service_withdependency', function(mathservice){

    var plusOne = function(x){
      return mathservice.addTwoNumbers(x,1);
    }

    return {
      plusOne
    };
  });