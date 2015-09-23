/*
 * excel-regression
 * Copyright(c) Leonardo Fachetti
 * MIT Licensed
 */

var validation = require('./utils/validation');
var math = require('./utils/math');
var Regression = require('./bean/regression');
var _ = require('lodash');

var exports = module.exports = {};

exports.calculate = function (values) {
    validation.validate(values);
    var excelRegression = new Regression();

    var regression = math.linearRegression(values);

    excelRegression.getResidual().setObservation(math.residual.observation(values));
    excelRegression.getResidual().setPredictedY(math.residual.predictedY(values));
    excelRegression.getResidual().setResiduals(math.residual.residuals(values));

    excelRegression.getAnova().getIntercept().setCoefficient(math.anova.intercept.coefficient(values));
    excelRegression.getAnova().getVarX1().setCoefficient(math.anova.varX1.coefficient(values));
    excelRegression.getAnova().getRegression().setDf(math.anova.regression.df(values));


    console.log(excelRegression);
    return excelRegression;
};
