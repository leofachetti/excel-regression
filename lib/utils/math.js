var regression = require('regression');
var _ = require('lodash');

var exports = module.exports = {};

exports.linearRegression = function(values) {
  return regression('linear', values);
};


exports.residual = {
  observation: function(values) {
    return values.length;
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
    }
  },

  residual: {
    df: function(values) {
      return values.length - values[0].length;
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
