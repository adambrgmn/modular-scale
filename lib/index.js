'use strict';

module.exports = function (step) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$ratio = _ref.ratio,
      ratio = _ref$ratio === undefined ? 1.5 : _ref$ratio,
      _ref$base = _ref.base,
      base = _ref$base === undefined ? 1 : _ref$base,
      decimals = _ref.decimals;

  if (step == null && typeof step === 'number') throw new Error('Step must be defined to calculate modular scale');
  if (ratio <= 0) throw new Error('Ratio must be greater than 0');
  if (typeof decimals === 'number' && decimals < 0) throw new Error('Decimals must be a number greater than or equal to 0.');

  var scale = base * Math.pow(ratio, step);
  var fixed = typeof decimals === 'number' ? Number(scale.toFixed(decimals)) : scale;

  return fixed;
};
