const test = require('tape');
const buildScales = require('../src/build-scales');

test('Module: buildScales()', (t) => {
  {
    const should = 'Should return object containing scales based on input';
    const actual = buildScales(['1', '2']);
    const expected = { 1: 1.5, 2: 2.25 };

    t.deepEqual(actual, expected, should);
  }

  {
    const should = 'Should accept a range as input';
    const actual = buildScales(['2..3']);
    const expected = { 2: 2.25, 3: 3.375 };

    t.deepEqual(actual, expected, should);
  }

  {
    const should = 'Should ignore following steps if first is a range';
    const actual = buildScales(['2..3', '4', '5']);
    const expected = { 2: 2.25, 3: 3.375 };

    t.deepEqual(actual, expected, should);
  }

  t.end();
});
