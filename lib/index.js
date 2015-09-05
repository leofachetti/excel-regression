/*!
 * excel-regression
 * Copyright(c) 2015 Leonardo Fachetti
 * MIT Licensed
 */

module.exports = {
  caulculate: function (values) {
    if(!(values instanceof Array))
      throw new ReferenceError('Attribute `values` must be a array');
    else if(values.length <= 0)
      throw new ReferenceError('Attribute `values` cannot be a empty');

    values.forEach(function (value) {
      if(!(value instanceof Array))
        throw new ReferenceError('Attribute `value` must be a array');
      else if(value.length != 2)
        throw new ReferenceError('Attribute `value` must have 2 elements');
    });

  }
}
