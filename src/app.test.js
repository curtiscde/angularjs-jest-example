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
    expect(
      _myservice.addTwoNumbers(1,1)
    )
    .toEqual(2);
  });

});
