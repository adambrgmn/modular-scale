// @flow

const chalk = require('chalk');

type Settings = {
  ratio?: number,
  base?: number,
  decimals?: number,
};

const padRight = (str: string, length: number): string => {
  let paddedStr = str;
  let i = paddedStr.length;

  while (i <= length) {
    paddedStr = `${paddedStr} `;
    i += 1;
  }

  return paddedStr;
};

module.exports = (scales: { [key: string]: number }, settings: Settings): void => {
  const longestKey = Object.keys(settings).reduce((acc, key) => {
    if (!settings[key]) return acc;
    return key.length > acc ? key.length : acc;
  }, 0);

  const settingsLogs = Object.keys(settings).reduce((acc, key) => {
    if (!settings[key]) return acc;
    const keyString = chalk.green(padRight(`${key}:`, longestKey + 2));
    const valueString = chalk.blue(settings[key]);

    return [...acc, `${keyString}${valueString}`];
  }, []);

  const scaleLogs = Object.keys(scales)
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10))
    .reduce((acc, key) => {
      const keyString = chalk.green(padRight(`${key}:`, longestKey + 2));
      const valueString = chalk.blue(scales[key]);

      return [...acc, `${keyString}${valueString}`];
    }, []);

  const write = str => process.stdout.write(`${str}\n`);

  write(chalk.green('SETTINGS'));
  settingsLogs.forEach(s => write(s));
  write('');
  write(chalk.green('SCALES'));
  scaleLogs.forEach(s => write(s));
};
