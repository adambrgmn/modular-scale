'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var modularScale = require('./modular-scale');

var noNumberError = new Error('Arguments must be numbers');
var isRange = function isRange(arg) {
  return arg.includes('..');
};

module.exports = function (steps) {
  var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var head = steps[0];

  var s = [];

  if (isRange(head)) {
    // If first argument is a range, build the range
    var _head$split$map = head.split('..').map(function (n) {
      return parseInt(n, 10);
    }),
        _head$split$map2 = _slicedToArray(_head$split$map, 2),
        from = _head$split$map2[0],
        to = _head$split$map2[1];

    if (isNaN(from) || isNaN(to)) throw noNumberError;

    var n = from;
    while (n <= to) {
      s.push(n);
      n += 1;
    }
  } else {
    steps.map(function (n) {
      return parseInt(n, 10);
    }).forEach(function (step) {
      if (isNaN(step)) throw noNumberError;
      s.push(step);
    });
  }

  var scales = s.reduce(function (acc, step) {
    return Object.assign({}, acc, { [step]: modularScale(step, settings) });
  }, {});

  return scales;
};