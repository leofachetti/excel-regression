# excel-regression
[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-dt-image]][npm-dt-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][david-dm-image]][david-dm-url] [![devDependency Status] [david-ddm-image]][david-ddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
>


## Install

```sh
$ npm install --save excel-regression
```


## Usage

```js
var excelRegression = require('excel-regression');
var data = [
  [0.827106, 32699512],
  [1.275007, 50550730],
  [1.435098, 56214886],
  [1.597657, 63010730],
  [1.748174, 68767902],
  [1.904614, 75539606]
];
excelRegression.calculate(data);
```

## License

MIT © [Leonardo Fachetti]()


[npm-image]: https://badge.fury.io/js/excel-regression.svg
[npm-url]: https://npmjs.org/package/excel-regression
[npm-dt-image]: https://img.shields.io/npm/dt/excel-regression.svg
[npm-dt-url]: https://npmjs.org/package/excel-regression
[travis-image]: https://travis-ci.org/leofachetti/excel-regression.svg?branch=master
[travis-url]: https://travis-ci.org/leofachetti/excel-regression
[david-dm-image]: https://david-dm.org/leofachetti/excel-regression.svg?theme=shields.io
[david-dm-url]: https://david-dm.org/leofachetti/excel-regression
[david-ddm-image]: https://david-dm.org/leofachetti/excel-regression/dev-status.svg?theme=shields.io
[david-ddm-url]: https://david-dm.org/leofachetti/excel-regression#info=devDependencies
[coveralls-image]: https://coveralls.io/repos/leofachetti/excel-regression/badge.svg
[coveralls-url]: https://coveralls.io/r/leofachetti/excel-regression
