// @flow

const modularScale = require('./modular-scale');

type Settings = {
  ratio?: number,
  base?: number,
  decimals?: number,
};

const noNumberError = new Error('Arguments must be numbers');
const isRange = (arg: string): boolean => arg.includes('..');

module.exports = (
  steps: Array<string>,
  settings: Settings = {},
): { [key: string]: number } => {
  const head = steps[0];

  const s: Array<number> = [];

  if (isRange(head)) {
    // If first argument is a range, build the range
    const [from, to] = head.split('..').map(n => parseInt(n, 10));

    if (isNaN(from) || isNaN(to)) throw noNumberError;

    let n = from;
    while (n <= to) {
      s.push(n);
      n += 1;
    }
  } else {
    steps
      .map(n => parseInt(n, 10))
      .forEach((step) => {
        if (isNaN(step)) throw noNumberError;
        s.push(step);
      });
  }

  const scales = s.reduce((acc, step) => Object.assign(
    {},
    acc,
    { [step]: modularScale(step, settings) },
  ), {});

  return scales;
};
