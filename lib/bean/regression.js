var Anova = require('./anova/anova');
var Summary = require('./summary/summary');
var Residual = require('./residual/residual');

function Regression() {
  this.summary = new Summary();
  this.anova = new Anova();
  this.residual = new Residual();
}

Regression.prototype.getAnova = function() {
  return this.anova;
}

Regression.prototype.getSummary = function() {
  return this.summary;
}

Regression.prototype.getResidual = function() {
  return this.residual;
}

module.exports = Regression;
