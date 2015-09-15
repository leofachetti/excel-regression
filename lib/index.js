/*
 * excel-regression
 * Copyright(c) Leonardo Fachetti
 * MIT Licensed
 */

var validation = require('./utils/validation');
var Regression = require('regression');
var _ = require('lodash');
var excelRegression = {
  "summary": {},
  "anova": {},
  "residual": {}
};

var exports = module.exports = {};

exports.calculate = function (values) {
    validation.validate(values);

    var regression = Regression('linear', values);
    console.log(regression);

    excelRegression.residual.observation = values.length;

    excelRegression.residual.predictedY = [];
    _.pluck(regression.points, 1).forEach(function(point) {
      excelRegression.residual.predictedY.push(_.round(point, 7));
    });



    console.log(excelRegression);
    return excelRegression;
};
