var Intercept = require('./intercept');
var VarX1 = require('./varX1');
var Regression = require('./regression');
var Residual = require('./residual');
var Total = require('./total');

function Anova() {
  this.intercept = new Intercept();
  this.varX1 = new VarX1();
  this.regression = new Regression();
  this.residual = new Residual();
  this.total = new Total();
}

Anova.prototype.getIntercept = function() {
  return this.intercept;
}

Anova.prototype.getVarX1 = function() {
  return this.varX1;
}

Anova.prototype.getRegression = function() {
  return this.regression;
}

Anova.prototype.getResidual = function() {
  return this.residual;
}

Anova.prototype.getTotal = function() {
  return this.total;
}

module.exports = Anova;
