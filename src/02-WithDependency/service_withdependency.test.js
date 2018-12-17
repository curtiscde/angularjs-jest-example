require('../../node_modules/angular/angular.min.js');
require('../../node_modules/angular-mocks/angular-mocks.js');
require('./service_withdependency.js');

describe('Service with dependency - plusOne', function(){

  beforeEach(function(){

    angular.module('mathmodule', []);
    angular.mock.module('module_withdependency');

    angular.mock.module(function($provide) {
      $provide.service('mathservice', function(){
        return {
          addTwoNumbers: function(x,y){
            return x+y;
          }
        }
      });
    });

  });

  var _service_withdependency;

  beforeEach(inject((service_withdependency) => {
    _service_withdependency = service_withdependency;
  }));

  it('2 should return 3', function(){
    var actual = _service_withdependency.plusOne(2);
    expect(actual).toEqual(3);
  });

  it('10 should return 11', function(){
    var actual = _service_withdependency.plusOne(10);
    expect(actual).toEqual(11);
  });

  it('55 should return 56', function(){
    var actual = _service_withdependency.plusOne(55);
    expect(actual).toEqual(56);
  });

});
