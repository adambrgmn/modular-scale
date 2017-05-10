#!/usr/bin/env node
// @flow

const program = require('commander');
const buildScales = require('./build-scales');
const logResult = require('./log-result');
const pkg = require('../package.json');

program
  .version(pkg.version)
  .description('Get scale from a modular scale (step can be either single (eg. 2) or a range (eg. 5..10))')
  .arguments('<steps ...>')
  .option('-r, --ratio [n]', 'ratio to scale steps, greater than 0 (default: 1.5)', n => parseFloat(n, 10), 1.5)
  .option('-b, --base [n]', 'base to count scale from (default: 1)', parseFloat, 1)
  .option('-d, --decimals [n]', 'decimals to round to, greater than, or equal to, 0', n => parseInt(n, 10));

program.parse(process.argv);
const { args, ratio, base, decimals } = program;
const scales = buildScales(args, { ratio, base, decimals });
logResult(scales, { ratio, base, decimals });
