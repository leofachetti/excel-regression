var regression = require('regression');
var _ = require('lodash');

var exports = module.exports = {};

exports.linearRegression = function(values) {
  return regression('linear', values);
};

exports.summary = {
  rSquare: function(values) {
    var ss = exports.SS(values);
    return _.round((ss - exports.SSE(values))/ss, 9);
  },

  multipleR: function(values) {
    return _.round(Math.sqrt(exports.summary.rSquare(values)), 9);
  },

  adjustedRSquare: function(values) {
    var rSquare = exports.summary.rSquare(values);
    return _.round(rSquare - (1 - rSquare) * exports.anova.regression.df(values) / exports.anova.residual.df(values), 9);
  },

  standardError: function(values) {
    return _.round(Math.sqrt(exports.SSE(values) / exports.anova.residual.df(values)), 4);
  },

  observations: function(values) {
    return values.length;
  }
};

exports.residual = {
  observation: function(values) {
    return exports.summary.observations(values);
  },

  predictedY: function(values) {
    var regression = exports.linearRegression(values);
    var predictedY = [];

    _.pluck(regression.points, 1).forEach(function(point) {
      predictedY.push(_.round(point, 7));
    });

    return predictedY;
  },

  residuals: function(values) {
    var residuals = [];

    values.forEach(function(value) {
      residuals.push(_.round(value[1] - (exports.anova.intercept.coefficient(values) + (exports.anova.varX1.coefficient(values) * value[0])), 5));
    });

    return residuals;
  }
};

exports.anova = {
  intercept: {
    coefficient: function(values) {
      var regression = exports.linearRegression(values);
      return _.round(regression.equation[1], 5);
    }
  },

  varX1: {
    coefficient: function(values) {
      var regression = exports.linearRegression(values);
      return _.round(regression.equation[0], 5);
    }
  },

  regression: {
    df: function(values) {
      return values[0].length - 1;
    },

    ss: function(values) {
      return exports.SS(values) - exports.SSE(values);
    },

    ms: function(values) {
      return exports.SS(values) - exports.anova.residual.ss(values);
    }
  },

  residual: {
    df: function(values) {
      return values.length - values[0].length;
    },

    ss: function(values) {
      return (1 - exports.summary.rSquare(values)) * exports.SS(values);
    }
  },

  total: {
    df: function(values) {
      return exports.anova.regression.df(values) + exports.anova.residual.df(values);
    },

    ss: function(values) {
      return exports.anova.regression.ss(values) + exports.anova.residual.ss(values);
    }
  }
};

exports.average = function(values) {
  var sum = 0;
  _.pluck(values, 1).forEach(function(value) {
    sum += value;
  });

  return _.round(sum/values.length, 5);
};

exports.SS = function(values) {
  var sum = 0;
  var average = exports.average(values);
  _.pluck(values, 1).forEach(function(value) {
    sum += ((value - average) * (value - average));
  });

  return sum;
};

exports.SSE = function(values) {
  var sum = 0;
  var i = 0;
  var predictedY = exports.residual.predictedY(values);
  _.pluck(values, 1).forEach(function(value) {
    sum += ((value - predictedY[i]) * (value - predictedY[i++]));
  });

  return sum;
};
