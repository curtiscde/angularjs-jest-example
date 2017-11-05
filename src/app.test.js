require('../node_modules/angular/angular.min.js');
require('../node_modules/angular-mocks/angular-mocks.js');
require('./app.js');

describe('myservice service - addTwoNumbers', function(){

  beforeEach(
    angular.mock.module('myapp')
  );

  var _myservice;

  beforeEach(inject((myservice) => {
    _myservice = myservice;
  }));

  it('1 + 1 should equal 2', function(){
    var actual = _myservice.addTwoNumbers(1,1);
    expect(actual).toEqual(2);
  });

  it('10 + 5 should equal 15', function(){
    var actual = _myservice.addTwoNumbers(10,5);
    expect(actual).toEqual(15);
  });

  it('50 + 80 should equal 130', function(){
    var actual = _myservice.addTwoNumbers(50,80);
    expect(actual).toEqual(130);
  });

});

describe('myservice service - multiplyTwoNumbers', function(){

  beforeEach(
    angular.mock.module('myapp')
  );

  var _myservice;

  beforeEach(inject((myservice) => {
    _myservice = myservice;
  }));

  it('1 * 1 should equal 1', function(){
    var actual = _myservice.multiplyTwoNumbers(1,1);
    expect(actual).toEqual(1);
  });

  it('10 * 10 should equal 100', function(){
    var actual = _myservice.multiplyTwoNumbers(10,10);
    expect(actual).toEqual(100);
  });

  it('42 + 8 should equal 336', function(){
    var actual = _myservice.multiplyTwoNumbers(42,8);
    expect(actual).toEqual(336);
  });

});
