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

var expectedInterceptCoefficient = -57754.83954;
var expectedVarX1Coefficient = 39501989.4995;

describe('anova', function() {
  it('should return the intercept coefficient', function() {
    expect(regression.calculate(validData).anova.intercept.coefficient).to.be.equal(expectedInterceptCoefficient);
  });

  it('should return the varX1 coefficient', function() {
    expect(regression.calculate(validData).anova.varX1.coefficient).to.be.equal(expectedVarX1Coefficient);
  });

  it('should return the regression df', function() {
    expect(1).to.be.equal(regression.calculate(validData).anova.regression.df);
  });

  it('should return the regression SS', function() {
    expect(1146813719329441.5).to.be.equal(regression.calculate(validData).anova.regression.ss);
  });

  it('should return the regression MS', function() {
    expect(1146813719666335.5).to.be.equal(regression.calculate(validData).anova.regression.ms);
  });

  it('should return the regression F', function() {
    expect(10786.4684).to.be.equal(regression.calculate(validData).anova.regression.f);
  });

  it('should return the residual df', function() {
    expect(4).to.be.equal(regression.calculate(validData).anova.residual.df);
  });

  it('should return the residual SS', function() {
    expect(425436432451.90967).to.be.equal(regression.calculate(validData).anova.residual.ss);
  });

  it('should return the residual MS', function() {
    expect(106359192305.45796).to.be.equal(regression.calculate(validData).anova.residual.ms);
  });

  it('should return the total df', function() {
    expect(5).to.be.equal(regression.calculate(validData).anova.total.df);
  });

  it('should return the total SS', function() {
    expect(1147239155761893.5).to.be.equal(regression.calculate(validData).anova.total.ss);
  });

});
