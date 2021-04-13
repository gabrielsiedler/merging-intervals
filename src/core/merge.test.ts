import { Interval } from './Interval'
import { merge } from './merge'

describe('Merge', () => {
  test('should work for the simplest example', () => {
    const interval = new Interval(1)

    expect(merge([interval])).toEqual([interval])
  })

  test('should work for multiple intervals', () => {
    const intervals = [new Interval(1), new Interval(2, 3)]

    const merged = merge(intervals)

    expect(merged[0].start).toEqual(1)
    expect(merged[0].end).toEqual(1)
    expect(merged[1].start).toEqual(2)
    expect(merged[1].end).toEqual(3)
  })

  test('should work for multiple intervals with overlap', () => {
    const intervals = [new Interval(5, 20), new Interval(15, 40)]

    const merged = merge(intervals)

    expect(merged).toHaveLength(1)
    expect(merged[0].start).toEqual(5)
    expect(merged[0].end).toEqual(40)
  })

  test('should work for multiple intervals with overlap (2)', () => {
    const intervals = [new Interval(5, 20), new Interval(15, 40), new Interval(50, 51), new Interval(51, 55)]

    const merged = merge(intervals)

    expect(merged).toHaveLength(2)
    expect(merged[0].start).toEqual(5)
    expect(merged[0].end).toEqual(40)
    expect(merged[1].start).toEqual(50)
    expect(merged[1].end).toEqual(55)
  })
})
