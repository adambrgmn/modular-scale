'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var chalk = require('chalk');

var padRight = function padRight(str, length) {
  var paddedStr = str;
  var i = paddedStr.length;

  while (i <= length) {
    paddedStr = `${paddedStr} `;
    i += 1;
  }

  return paddedStr;
};

module.exports = function (scales, settings) {
  var longestKey = Object.keys(settings).reduce(function (acc, key) {
    if (!settings[key]) return acc;
    return key.length > acc ? key.length : acc;
  }, 0);

  var settingsLogs = Object.keys(settings).reduce(function (acc, key) {
    if (!settings[key]) return acc;
    var keyString = chalk.green(padRight(`${key}:`, longestKey + 2));
    var valueString = chalk.blue(settings[key]);

    return [].concat(_toConsumableArray(acc), [`${keyString}${valueString}`]);
  }, []);

  var scaleLogs = Object.keys(scales).sort(function (a, b) {
    return parseInt(a, 10) - parseInt(b, 10);
  }).reduce(function (acc, key) {
    var keyString = chalk.green(padRight(`${key}:`, longestKey + 2));
    var valueString = chalk.blue(scales[key]);

    return [].concat(_toConsumableArray(acc), [`${keyString}${valueString}`]);
  }, []);

  var write = function write(str) {
    return process.stdout.write(`${str}\n`);
  };

  write(chalk.green('SETTINGS'));
  settingsLogs.forEach(function (s) {
    return write(s);
  });
  write('');
  write(chalk.green('SCALES'));
  scaleLogs.forEach(function (s) {
    return write(s);
  });
};