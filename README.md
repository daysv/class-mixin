# class-mixin
  [![Build Status](https://travis-ci.org/daysv/class-mixin.svg?branch=master)](https://travis-ci.org/daysv/class-mixin)

Mixin for ES6 classes

# Usage

```bash
$ npm install class-mixin -save
```

```js
import mixin from 'class-mixin'
```

```js
class Sub extends mixin(Base1, Base2) {

}
```
It's in-order, so the last source will override properties of the same name in previous arguments.

# LICENSE
MIT
