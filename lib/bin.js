#!/usr/bin/env node
'use strict';

var program = require('commander');
var buildScales = require('./build-scales');
var logResult = require('./log-result');
var pkg = require('../package.json');

program.version(pkg.version).description('Get scale from a modular scale (step can be either single (eg. 2) or a range (eg. 5..10))').arguments('<steps ...>').option('-r, --ratio [n]', 'ratio to scale steps, greater than 0 (default: 1.5)', function (n) {
  return parseFloat(n, 10);
}, 1.5).option('-b, --base [n]', 'base to count scale from (default: 1)', parseFloat, 1).option('-d, --decimals [n]', 'decimals to round to, greater than, or equal to, 0', function (n) {
  return parseInt(n, 10);
});

program.parse(process.argv);
var args = program.args,
    ratio = program.ratio,
    base = program.base,
    decimals = program.decimals;

var scales = buildScales(args, { ratio, base, decimals });
logResult(scales, { ratio, base, decimals });