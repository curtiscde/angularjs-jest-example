require('../node_modules/angular/angular.min.js');
require('../node_modules/angular-mocks/angular-mocks.js');
require('./asyncservice.js');

describe('Async service - concatStrings', function(){

  beforeEach(
    angular.mock.module('asyncmodule')
  );

  var _asyncservice;

  beforeEach(inject((asyncservice) => {
    _asyncservice = asyncservice;
  }));

  it('abc + def should equal abcdef', function(){
    expect.assertions(1);
    return _asyncservice.concatStrings('abc','def').then(function(response){
      expect(response).toEqual('abcdefa');
    });
  });

});
