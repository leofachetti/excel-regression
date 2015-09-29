var regression = require('../lib');
var expect = require('chai').expect;

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

var expectedResiduals = [
    84934.31257,
    243171.71375,
    -416585.28721,
    -42145.19826,
    -230694.15176,
    361318.61094
];

describe('residual output', function() {
  it('should return the number of observations', function() {
    expect(regression.calculate(validData).residual.observation).to.be.equal(validData.length);
    expect(regression.calculate(validData).residual.observation).to.be.equal(validData.length);
  });

  it('should return the predictedY', function() {
    var predictedY = regression.calculate(validData).residual.predictedY;
    expect(predictedY.length).to.be.equal(validData.length);
    expect(predictedY).to.be.deep.equal(expectedPredictedY);
  });

  it('should return the residuals', function() {
    var residuals = regression.calculate(validData).residual.residuals;
    expect(residuals.length).to.be.equal(validData.length);
    expect(residuals).to.be.deep.equal(expectedResiduals);
  });
});
