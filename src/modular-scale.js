// @flow

type Settings = {
  ratio?: number,
  base?: number,
  decimals?: number,
};

module.exports = (step: number, {
  ratio = 1.5,
  base = 1,
  decimals,
}: Settings = {}): number => {
  if (typeof step !== 'number') throw new Error('Step must be a defined number to calculate modular scale');
  if (typeof ratio !== 'number' || ratio <= 0) throw new Error('Ratio must be a number greater than 0');
  if (
    (decimals != null && typeof decimals !== 'number') ||
    (typeof decimals === 'number' && decimals < 0)
  ) throw new Error('Decimals must be a number greater than or equal to 0.');

  const scale = base * (ratio ** step);
  const fixed = typeof decimals === 'number' ? Number(scale.toFixed(decimals)) : scale;

  return fixed;
};
