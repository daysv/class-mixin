# class-mixin
  [![npm version](https://img.shields.io/npm/v/class-mixin.svg?style=flat)](https://www.npmjs.com/package/class-mixin)
  [![Build Status](https://travis-ci.org/daysv/class-mixin.svg?branch=master)](https://travis-ci.org/daysv/class-mixin)
  [![codecov.io](https://codecov.io/github/daysv/class-mixin/coverage.svg?branch=master)](https://codecov.io/github/daysv/class-mixin?branch=master)
  [![david-dm.org](https://david-dm.org/daysv/class-mixin.svg)](https://github.com/daysv/class-mixin)

 Mixin for ES6 classes
# Usage

```bash
$ npm install class-mixin -save
```

```js
import mixin from 'class-mixin'
// or
var mixin = require('class-mixin').default
```

```js
class Sub extends mixin(Base1, Base2) {

}
```
It's in-order, so the last source will override properties of the same name in previous arguments.

# LICENSE
MIT
