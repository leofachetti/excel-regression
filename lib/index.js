/*
 * excel-regression
 * Copyright(c) Leonardo Fachetti
 * MIT Licensed
 */

var validation = require('./utils/validation');
var Regression = require('regression');
var _ = require('lodash');

var exports = module.exports = {};

exports.calculate = function (values) {
    validation.validate(values);
    var excelRegression = {
      "summary": {},
      "anova": {
        "intercept": {},
        "varX1": {}
      },
      "residual": {
        "residuals": []
      }
    };

    var regression = Regression('linear', values);
    console.log(regression);

    excelRegression.residual.observation = values.length;

    excelRegression.residual.predictedY = [];
    _.pluck(regression.points, 1).forEach(function(point) {
      excelRegression.residual.predictedY.push(_.round(point, 7));
    });

    excelRegression.anova.intercept.coefficient = _.round(regression.equation[1], 5);
    excelRegression.anova.varX1.coefficient = _.round(regression.equation[0], 5);

    values.forEach(function(value) {
      excelRegression.residual.residuals.push(_.round(value[1] - (excelRegression.anova.intercept.coefficient + (excelRegression.anova.varX1.coefficient * value[0])), 5))
    });

    console.log(excelRegression);
    return excelRegression;
};
