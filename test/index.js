var regression = require('../lib');
var expect = require('chai').expect;
var should = require('chai').should();
var assert = require('chai').assert;

var validData = [
  [0.827106,	32699512],
  [1.275007,	50550730],
  [1.435098,	56214886],
  [1.597657,	63010730],
  [1.748174,	68767902],
  [1.904614,	75539606]
]

describe('data validation', function () {
  it('should throw a ReferenceError when attribute is null', function () {
    try {
      regression.caulculate(null);
    } catch(e) {
      expect(e).to.be.an.instanceof(ReferenceError);
      expect(e.message).to.have.string('Attribute `values` must be a array');
      return;
    }
    assert(false, "Should not get here");
  });

  it('should throw a ReferenceError when attribute is a string', function () {
    try {
      regression.caulculate("");
    } catch(e) {
      expect(e).to.be.an.instanceof(ReferenceError);
      expect(e.message).to.have.string('Attribute `values` must be a array');
      return;
    }
    assert(false, "Should not get here");
  });

  it('should throw a ReferenceError when attribute is not set', function () {
    try {
      regression.caulculate();
    } catch(e) {
      expect(e).to.be.an.instanceof(ReferenceError);
      expect(e.message).to.have.string('Attribute `values` must be a array');
      return;
    }
    assert(false, "Should not get here");
  });

  it('should throw a ReferenceError when reciving a object', function () {
    try {
      regression.caulculate({});
    } catch(e) {
      expect(e).to.be.an.instanceof(ReferenceError);
      expect(e.message).to.have.string('Attribute `values` must be a array');
      return;
    }
    assert(false, "Should not get here");
  });

  it('should throw a ReferenceError when reciving a empty array', function () {
    try {
      regression.caulculate([]);
    } catch(e) {
      expect(e).to.be.an.instanceof(ReferenceError);
      expect(e.message).to.have.string('cannot be a empty');
      return;
    }
    assert(false, "Should not get here");
  });

  it('should throw a ReferenceError when reciving a non 2 dimensional array', function () {
    try {
      regression.caulculate([1, 1, 3]);
    } catch(e) {
      expect(e).to.be.an.instanceof(ReferenceError);
      expect(e.message).to.have.string('Attribute `value` must be a array');
      return;
    }
    assert(false, "Should not get here");
  });

  it('should throw a ReferenceError when reciving a non full 2 dimensional array', function () {
    try {
      regression.caulculate([[1, 2], 1, 3]);
    } catch(e) {
      expect(e).to.be.an.instanceof(ReferenceError);
      expect(e.message).to.have.string('Attribute `value` must be a array');
      return;
    }
    assert(false, "Should not get here");
  });

  it('should throw a ReferenceError when reciving full 2 dimensional array with numbers of elements diferent than 2', function () {
    try {
      regression.caulculate([[1, 2], [1], [3, 2]]);
    } catch(e) {
      expect(e).to.be.an.instanceof(ReferenceError);
      expect(e.message).to.have.string('Attribute `value` must have 2 elements');
      return;
    }
    assert(false, "Should not get here");
  });

  it('should not throw a ReferenceError when reciving a valid attribute', function () {
    try {
      regression.caulculate(validData);
    } catch(e) {
      assert(false, "Should not get here");
    }
  });
});
