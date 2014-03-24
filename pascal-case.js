var camel = require('camel-case');

/**
 * Pascal case a string.
 *
 * @param  {String} string
 * @return {String}
 */
module.exports = function (string) {
  var str = camel(string);

  return str.charAt(0).toUpperCase() + str.substr(1);
};
