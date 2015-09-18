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
  }
};

exports.average = function(values) {
  var sum = 0;
  _.pluck(values, 1).forEach(function(value) {
    sum += value;
  });

  return _.round(sum/values.length, 5);
}
