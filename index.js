/**
 * Reject an array|object's empty values
 * @param  {Array|Object} o
 * @param  {Boolean} omitZero
 * @return {Array|Object}
 */
module.exports = function (o, omitZero) {
  if (Array.isArray(o)) {
    return o.filter(function (el) {
      return !isEmpty(el, omitZero);
    });
  } else {
    var tmp = {}, v;
    Object.keys(o).forEach(function (k) {
      v = o[k];
      if (!isEmpty(v, omitZero)) tmp[k] = v;
    });
    return tmp;
  }
};

/**
 * detect falsey value
 * @param  {Any} v
 * @param  {Boolean} omitZero
 * @return {Boolean}
 */
function isEmpty(v, omitZero) {
  var isZero = v === 0 || v === '0';
  return omitZero && isZero || (isZero ? false : !v);
}
