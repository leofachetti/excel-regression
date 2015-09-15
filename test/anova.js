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

var expectedInterceptCoefficient = -57754.83954;
var expectedVarX1Coefficient = 39501989.4995;

describe('anova', function () {
  it('should return the intercept coefficient', function() {
    expect(regression.calculate(validData).anova.intercept.coefficient).to.be.equal(expectedInterceptCoefficient);
  });

  it('should return the varX1 coefficient', function() {
    expect(regression.calculate(validData).anova.varX1.coefficient).to.be.equal(expectedVarX1Coefficient);
  });
});
