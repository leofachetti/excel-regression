/*!
 * excel-regression
 * Copyright(c) Leonardo Fachetti
 * MIT Licensed
 */

var validation = require('./utils/validation')

module.exports = {
  caulculate: function (values) {
    validation.validate(values);
  }
}
