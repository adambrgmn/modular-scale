/* eslint-disable import/no-extraneous-dependencies */
const test = require('tape');
const modularScale = require('../src/modular-scale');

test('Module: modularScale()', (t) => {
  {
    const should = 'Should return the modular scale based on the steps provided';
    const actual = modularScale(0);
    const expected = 1;

    t.equal(actual, expected, should);
  }

  {
    const should = 'Should return the modular scale based on the steps provided';
    const actual = modularScale(3);
    const expected = 3.375;

    t.equal(actual, expected, should);
  }

  {
    const should = 'Should return the modular scale based on the steps provided';
    const actual = modularScale(-2);
    const expected = 0.4444444444444444;

    t.equal(actual, expected, should);
  }

  {
    const should = 'Should return the modular scale based on the steps and optional ratio';
    const actual = modularScale(3, { ratio: 1.25 });
    const expected = 1.953125;

    t.equal(actual, expected, should);
  }

  {
    const should = 'Should return the modular scale based on the steps and optional base';
    const actual = modularScale(2, { base: 2 });
    const expected = 4.5;

    t.equal(actual, expected, should);
  }

  {
    const should = 'Should return the modular scale based on the steps and optional fixed decimals';
    const actual = modularScale(3, { decimals: 1 });
    const expected = 3.4;

    t.equal(actual, expected, should);
  }

  {
    const should = 'Should return the modular scale based on the steps and optional fixed decimals';
    const actual = modularScale(2, { base: 2, decimals: 0 });
    const expected = 5;

    t.equal(actual, expected, should);
  }

  {
    const should = 'Should error if step is not provided, or not a number';
    t.throws(() => modularScale(), should);
    t.throws(() => modularScale('1'), should);
  }

  {
    const should = 'Should error if ratio is less than or equal to 0, or not a number';
    t.throws(() => modularScale(1, { ratio: -1 }), should);
    t.throws(() => modularScale(1, { ratio: '-1' }), should);
  }

  {
    const should = 'Should error if decimals is less than 0, or not a number';
    t.throws(() => modularScale(1, { decimals: -1 }), should);
    t.throws(() => modularScale(1, { decimals: '-1' }), should);
  }

  t.end();
});
