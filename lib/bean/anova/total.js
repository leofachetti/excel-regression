function Total() {
  this.df = null;
  this.ss = null;
}

Total.prototype.setDf = function(df) {
  this.df = df;
};

Total.prototype.setSs = function(ss) {
  this.ss = ss;
};

module.exports = Total;
