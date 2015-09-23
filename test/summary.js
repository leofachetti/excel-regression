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
];

describe('summary output', function () {
  it('should return the r square', function() {
    expect(0.999629165).to.be.equal(regression.calculate(validData).summary.rSquare);
  });

  it('should return the multiple r', function() {
    expect(0.999814565).to.be.equal(regression.calculate(validData).summary.multipleR);
  });

  it('should return the adjusted r square', function() {
    expect(0.999536456).to.be.equal(regression.calculate(validData).summary.adjustedRSquare);
  });
});
