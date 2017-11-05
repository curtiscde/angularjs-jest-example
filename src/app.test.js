require('../node_modules/angular/angular.min.js');
require('../node_modules/angular-mocks/angular-mocks.js');
require('./app.js');

describe('myservice service tests', function(){

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

  it('50 + 80 should equal 130', function(){
    var actual = _myservice.addTwoNumbers(50,80);
    expect(actual).toEqual(130);
  });

});
