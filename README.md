# rejectEmpty(sth `<array|object>`, omitZero `<Boolean>`)

[![npm version][npm-v-img]][npm-url]
[![npm download][npm-dl-img]][npm-url]
[![build][build-img]][build-url]

> Omit empty values of an array|object

### Installation

`npm i reject-empty -S`  

### Usage
> Let's take a look at the test examples

```
test('omit empty values except 0 of an array', t => {
  t.deepEqual(
    rejectEmpty(
      [0, '0', undefined, null, NaN, false, '', true, 1, 'hello', { a: 1 }, [2]]
    ),
    [0, '0', true, 1, 'hello', { a: 1 }, [2]]
  )
})

test('omit empty values of an array', t => {
  t.deepEqual(
    rejectEmpty(
      [0, '0', undefined, null, NaN, false, '', true, 1, 'hello', { a: 1 }, [2]],
      true // omit 0
    ),
    [true, 1, 'hello', { a: 1 }, [2]]
  )
})

test('omit empty values except 0 of an object', t => {
  t.deepEqual(
    rejectEmpty(
      { a: 0, b: undefined, c: null, d: NaN, e: false, f: '', g: true, h: 'hello', i: { a: 1 }, j: [2] }
    ),
    { a: 0, g: true, h: 'hello', i: { a: 1 }, j: [2] }
  )
})

test('omit empty values of an object', t => {
  t.deepEqual(
    rejectEmpty(
      { a: '0', b: undefined, c: null, d: NaN, e: false, f: '', g: true, h: 'hello', i: { a: 1 }, j: [2] },
      true // omit 0
    ),
    { g: true, h: 'hello', i: { a: 1 }, j: [2] }
  )
})
```

### Test & Coverage

`npm test` & `npm run cov`

[npm-url]: https://www.npmjs.com/package/reject-empty
[npm-v-img]: http://img.shields.io/npm/v/reject-empty.svg
[npm-dl-img]: http://img.shields.io/npm/dm/reject-empty.svg
[build-img]: https://travis-ci.org/kenberkeley/reject-empty.svg?branch=master
[build-url]: https://travis-ci.org/kenberkeley/reject-empty
