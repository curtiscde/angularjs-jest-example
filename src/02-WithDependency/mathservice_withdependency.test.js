require('../../node_modules/angular/angular.min.js');
require('../../node_modules/angular-mocks/angular-mocks.js');
require('./mathservice_withdependency.js');

describe('Math service - addTwoNumbers', function(){

  beforeEach(
    angular.mock.module('mathmodule_withdependency')
  );

  var _mathservice;

  beforeEach(inject((mathservice_withdependency) => {
    _mathservice = mathservice_withdependency;
  }));

  it('1 + 1 should equal 2', function(){
    var actual = _mathservice.addTwoNumbers(1,1);
    expect(actual).toEqual(2);
  });

  it('10 + 5 should equal 15', function(){
    var actual = _mathservice.addTwoNumbers(10,5);
    expect(actual).toEqual(15);
  });

  it('50 + 80 should equal 130', function(){
    var actual = _mathservice.addTwoNumbers(50,80);
    expect(actual).toEqual(130);
  });

});
