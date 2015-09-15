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

var expectedPredictedY = [
    32614577.6874365,
    50307558.2862524,
    56631471.2872171,
    63052875.1982664,
    68998596.1517628,
    75178287.3890648
];

describe('residual output', function () {
  it('should return the number of observations', function() {
    expect(regression.calculate(validData).observation).to.be.equal(validData.length);
  });

  it('should return the predictedY', function() {
    var predictedY = regression.calculate(validData).predictedY;
    expect(predictedY.length).to.be.equal(validData.length);
    expect(predictedY).to.be.deep.equal(expectedPredictedY);
  });

  it('should return the residuals', function() {
    expect(true).to.be.equal(false);
  });
});
