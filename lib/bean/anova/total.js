function Total() {
  this.df;
  this.ss;
}

Total.prototype.setDf = function(df) {
  this.df = df;
}

Total.prototype.setSs = function(ss) {
  this.ss = ss;
}

module.exports = Total;
