var validation = require('../lib/utils/validation');
var expect = require('chai').expect;

var validData = [
  [0.827106,	32699512],
  [1.275007,	50550730],
  [1.435098,	56214886],
  [1.597657,	63010730],
  [1.748174,	68767902],
  [1.904614,	75539606]
];

describe('data validation', function() {
  it('should throw a TypeError when attribute is null', function() {
    var func = function() {
			validation.validate(null);
		};
    expect(func).to.throw(TypeError);
    expect(func).to.throw(/Attribute `values` must be a array/);
  });

  it('should throw a TypeError when attribute is a string', function() {
    var func = function() {
			validation.validate("");
		};
    expect(func).to.throw(TypeError);
    expect(func).to.throw(/Attribute `values` must be a array/);
  });

  it('should throw a TypeError when attribute is not set', function() {
    var func = function() {
			validation.validate();
		};
    expect(func).to.throw(TypeError);
    expect(func).to.throw(/Attribute `values` must be a array/);
  });

  it('should throw a TypeError when reciving a object', function() {
    var func = function() {
			validation.validate({});
		};
    expect(func).to.throw(TypeError);
    expect(func).to.throw(/Attribute `values` must be a array/);
  });

  it('should throw a TypeError when reciving a empty array', function() {
    var func = function() {
			validation.validate([]);
		};
    expect(func).to.throw(TypeError);
    expect(func).to.throw(/Attribute `values` cannot be a empty/);
  });

  it('should throw a TypeError when reciving a non 2 dimensional array', function() {
    var func = function() {
			validation.validate([1, 1, 3]);
		};
    expect(func).to.throw(TypeError);
    expect(func).to.throw(/Attribute `value` must be a array/);
  });

  it('should throw a TypeError when reciving a non full 2 dimensional array', function() {
    var func = function() {
			validation.validate([[1, 2], 1, 3]);
		};
    expect(func).to.throw(TypeError);
    expect(func).to.throw(/Attribute `value` must be a array/);
  });

  it('should throw a TypeError when reciving full 2 dimensional array with numbers of elements diferent than 2', function() {
    var func = function() {
			validation.validate([[1, 2], [1], [3, 2]]);
		};
    expect(func).to.throw(TypeError);
    expect(func).to.throw(/Attribute `value` must have 2 elements/);
  });

  it('should not throw a TypeError when reciving a valid attribute', function() {
    var func = function() {
			validation.validate(validData);
		};
    expect(func).not.to.throw(TypeError);
    expect(func).not.to.throw(Error);
  });
});
