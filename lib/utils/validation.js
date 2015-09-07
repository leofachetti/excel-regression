module.exports = {
  validate: function(values) {
    if(!(values instanceof Array))
      throw new TypeError('Attribute `values` must be a array');
    else if(values.length <= 0)
      throw new TypeError('Attribute `values` cannot be a empty');

    values.forEach(function (value) {
      if(!(value instanceof Array))
        throw new TypeError('Attribute `value` must be a array');
      else if(value.length != 2)
        throw new TypeError('Attribute `value` must have 2 elements');
    });
  }
}
