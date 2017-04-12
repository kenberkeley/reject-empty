import test from 'ava'
import rejectEmpty from '../'

test('omit empty values except zero of an array', t => {
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
      true // omit zero
    ),
    [true, 1, 'hello', { a: 1 }, [2]]
  )
})

test('omit empty values except zero of an object', t => {
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
      true // omit zero
    ),
    { g: true, h: 'hello', i: { a: 1 }, j: [2] }
  )
})
