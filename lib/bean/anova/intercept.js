function Intercept() {
  this.coefficient;
}

Intercept.prototype.setCoefficient = function(coefficient) {
  this.coefficient = coefficient;
}

module.exports = Intercept;
