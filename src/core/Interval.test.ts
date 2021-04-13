import { Interval } from './Interval'

describe('Interval class', () => {
  test('should accept both arguments', () => {
    const interval = new Interval(1, 2)

    expect(interval.start).toEqual(1)
    expect(interval.end).toEqual(2)
  })

  test('should accept both arguments in the wrong order', () => {
    const interval = new Interval(2, 1)

    expect(interval.start).toEqual(1)
    expect(interval.end).toEqual(2)
  })

  test('should accept only start argument', () => {
    const interval = new Interval(2)

    expect(interval.start).toEqual(2)
    expect(interval.end).toEqual(2)
  })
})
