function Residual() {
  this.df;
  this.SS;
  this.MS;
}

Residual.prototype.setDf = function(df) {
  this.df = df;
}

Residual.prototype.setSs = function(ss) {
  this.ss = ss;
}

Residual.prototype.setMs = function(ms) {
  this.ms = ms;
}

module.exports = Residual;
