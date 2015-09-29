function Summary() {
  this.multipleR = null;
  this.rSquare = null;
  this.adjustedRSquare = null;
  this.standardError = null;
  this.observations = null;
}

Summary.prototype.setMultipleR = function(multipleR) {
  this.multipleR = multipleR;
};

Summary.prototype.setRSquare = function(rSquare) {
  this.rSquare = rSquare;
};

Summary.prototype.setAdjustedRSquare = function(adjustedRSquare) {
  this.adjustedRSquare = adjustedRSquare;
};

Summary.prototype.setStandardError = function(standardError) {
  this.standardError = standardError;
};

Summary.prototype.setObservations = function(observations) {
  this.observations = observations;
};

module.exports = Summary;
