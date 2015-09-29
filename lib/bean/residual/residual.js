function Residual() {
  this.observation = null;
  this.predictedY = null;
  this.residuals = null;
}

Residual.prototype.setObservation = function(observation) {
  this.observation = observation;
};

Residual.prototype.setPredictedY = function(predictedY) {
  this.predictedY = predictedY;
};

Residual.prototype.setResiduals = function(residuals) {
  this.residuals = residuals;
};

module.exports = Residual;
