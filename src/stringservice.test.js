require('../node_modules/angular/angular.min.js');
require('../node_modules/angular-mocks/angular-mocks.js');
require('./stringservice.js');

describe('String service - addTwoStrings', function(){

  beforeEach(
    angular.mock.module('stringmodule')
  );

  var _stringservice;

  beforeEach(inject((stringservice) => {
    _stringservice = stringservice;
  }));

  it('abc + def should equal abcdef', function(){
    var actual = _stringservice.addTwoStrings('abc','def');
    expect(actual).toEqual('abcdef');
  });

  it('foo + bar should equal foobar', function(){
    var actual = _stringservice.addTwoStrings('foo','bar');
    expect(actual).toEqual('foobar');
  });

  it('foo + null should equal a', function(){
    var actual = _stringservice.addTwoStrings('foo',null);
    expect(actual).toEqual('foo');
  });

});

describe('String service - stringContainsValue', function(){

  beforeEach(
    angular.mock.module('stringmodule')
  );

  var _stringservice;

  beforeEach(inject((stringservice) => {
    _stringservice = stringservice;
  }));

  it('abc + def should equal abcdef', function(){
    var actual = _stringservice.stringContainsValue('abc','def');
    expect(actual).toEqual(false);
  });

  it('foo + bar should equal foobar', function(){
    var actual = _stringservice.stringContainsValue('foobar','bar');
    expect(actual).toEqual(true);
  });

  it('foo + null should equal a', function(){
    var actual = _stringservice.stringContainsValue('foo',null);
    expect(actual).toEqual(false);
  });

});
