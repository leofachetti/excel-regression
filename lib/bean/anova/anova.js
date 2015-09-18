var Intercept = require('./intercept');
var VarX1 = require('./varX1');

function Anova() {
  this.intercept = new Intercept();
  this.varX1 = new VarX1();
}

Anova.prototype.getIntercept = function() {
  return this.intercept;
}

Anova.prototype.getVarX1 = function() {
  return this.varX1;
}

module.exports = Anova;
