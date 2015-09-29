function Residual() {
  this.df = null;
  this.SS = null;
  this.MS = null;
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
