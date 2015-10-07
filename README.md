# excel-regression
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
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
[travis-image]: https://travis-ci.org/leofachetti/excel-regression.svg?branch=master
[travis-url]: https://travis-ci.org/leofachetti/excel-regression
[daviddm-image]: https://david-dm.org/leofachetti/excel-regression.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/leofachetti/excel-regression
[coveralls-image]: https://coveralls.io/repos/leofachetti/excel-regression/badge.svg
[coveralls-url]: https://coveralls.io/r/leofachetti/excel-regression
