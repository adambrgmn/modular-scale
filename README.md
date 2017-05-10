# Modular Scale

> A modular scale module and cli

A cli to get the modular scale based on a ratio. Read more about it on [www.modularscale.com](http://www.modularscale.com/).

## Installation

```sh
$ npm install --save adambrgmn/modular-scale
# or
$ yarn add adambrgmn/modular-scale
```

Then `import` or `require` it into your project.

```js
import ms from 'modular-scale';
const ms = require('modular-scale');
```

## Usage

```js
import ms from 'modular-scale';

const step = 5;
const scale = ms(step, { ratio: 2.3, base: 2, decimals: 4 });
// 128.7269

const steps = [1, 2, 3]
const scales = steps.map(step => ms(step));
// [1.5, 2.25, 3.375]
```

| Argument            | Type          | Required | Default | Description                          |
|:------------------- |:------------- |:--------:|:-------:|:------------------------------------ |
| `step`              | `Number`      | `true`   | `-`     | The step on the scale                |
| `settings.ratio`    | `Number >= 0` | `false`  | `1.5`   | The ratio by wich to count the steps |
| `settings.base`     | `Number >  0` | `false`  | `1`     | The base to start scaling from       |
| `settings.decimals` | `Number >= 0` | `false`  | `-`     | Round number to fixed decimals       |

## CLI

### Installation

```sh
$ npm install --global adambrgmn/modular-scale
```

### Usage

```sh
$ ms --help

  Usage: ms [options] <step>

  Get scale from a modular scale (step can be either single (eg. 2) or a range (eg. 5..10))

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -r, --ratio [n]     ratio to scale steps, greater than 0 (default: 1.5)
    -b, --base [n]      base to count scale from (default: 1)
    -d, --decimals [n]  decimals to round to, greater than, or equal to, 0
```

**Disclaimer:** It is possible to use a negative number as well. But to use it in the cli you must use this syntax:

```sh
$ ms -r 1.3 -- -1..10