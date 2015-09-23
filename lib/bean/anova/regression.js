function Regression() {
  this.df;
  this.ss;
  this.ms;
  this.f;
}

Regression.prototype.setDf = function(df) {
  this.df = df;
}

Regression.prototype.setSs = function(ss) {
  this.ss = ss;
}

Regression.prototype.setMs = function(ms) {
  this.ms = ms;
}

Regression.prototype.setF = function(f) {
  this.f = f;
}

module.exports = Regression;
