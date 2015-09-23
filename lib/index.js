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
    excelRegression.getAnova().getRegression().setSs(math.anova.regression.ss(values));
    excelRegression.getAnova().getResidual().setDf(math.anova.residual.df(values));
    excelRegression.getAnova().getTotal().setDf(math.anova.total.df(values));

    excelRegression.getSummary().setRSquare(math.summary.rSquare(values));
    excelRegression.getSummary().setMultipleR(math.summary.multipleR(values));
    excelRegression.getSummary().setAdjustedRSquare(math.summary.adjustedRSquare(values));


    console.log(excelRegression);
    return excelRegression;
};
