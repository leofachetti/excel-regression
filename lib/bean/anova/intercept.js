function Intercept() {
  this.coefficient = null;
}

Intercept.prototype.setCoefficient = function(coefficient) {
  this.coefficient = coefficient;
};

module.exports = Intercept;
