require('../node_modules/angular/angular.min.js');
require('../node_modules/angular-mocks/angular-mocks.js');
require('./mathservice.js');

describe('Math service - addTwoNumbers', function(){

  beforeEach(
    angular.mock.module('mathmodule')
  );

  var _mathservice;

  beforeEach(inject((mathservice) => {
    _mathservice = mathservice;
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

describe('Math service - multiplyTwoNumbers', function(){

  beforeEach(
    angular.mock.module('mathmodule')
  );

  var _mathservice;

  beforeEach(inject((mathservice) => {
    _mathservice = mathservice;
  }));

  it('1 * 1 should equal 1', function(){
    var actual = _mathservice.multiplyTwoNumbers(1,1);
    expect(actual).toEqual(1);
  });

  it('10 * 10 should equal 100', function(){
    var actual = _mathservice.multiplyTwoNumbers(10,10);
    expect(actual).toEqual(100);
  });

  it('42 + 8 should equal 336', function(){
    var actual = _mathservice.multiplyTwoNumbers(42,8);
    expect(actual).toEqual(336);
  });

});
