function Residual() {
    this.observation;
    this.predictedY;
    this.residuals;
}

Residual.prototype.setObservation = function(observation) {
  this.observation = observation;
}

Residual.prototype.setPredictedY = function(predictedY) {
  this.predictedY = predictedY;
}

Residual.prototype.setResiduals = function(residuals) {
  this.residuals = residuals;
}

module.exports = Residual;
