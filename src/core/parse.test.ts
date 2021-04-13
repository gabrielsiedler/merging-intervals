import { Interval } from './Interval'
import { parse } from './parse'

describe('Parse', () => {
  describe('Should accept', () => {
    test('one number', () => {
      const interval = new Interval(1)

      expect(parse('1')).toEqual([interval])
    })

    test('one interval', () => {
      const interval = new Interval(1, 10000)

      expect(parse('1-10000')).toEqual([interval])
    })

    test('multiple intervals separated by comma', () => {
      const intervals = [new Interval(1, 10), new Interval(11, 20), new Interval(21, 30)]

      expect(parse('1-10, 11-20, 21-30')).toEqual(intervals)
    })

    test('overlapping intervals', () => {
      const intervals = [new Interval(1, 10), new Interval(5, 15), new Interval(3, 11)]

      expect(parse('1-10, 5-15, 3-11')).toEqual(intervals)
    })

    test('multiple overlapping intervals', () => {
      const intervalValues = [
        [1, 10],
        [5, 15],
        [3, 11],
        [22, 56],
        [34, 70],
        [69, 100],
      ]
      const intervals = intervalValues.map((i) => new Interval(i[0], i[1]))

      expect(parse('1-10, 5-15, 3-11, 22-56, 34-70, 69-100')).toEqual(intervals)
    })

    test('with and without comma at the end of input', () => {
      const interval = new Interval(1, 10000)

      expect(parse('1-10000,')).toEqual([interval])
    })

    test('inconsistent white spaces', () => {
      const interval = new Interval(1, 10000)

      expect(parse('   1 -     10000   ,    ')).toEqual([interval])
    })

    test('repeated intervals', () => {
      const intervals = [new Interval(1, 1), new Interval(1), new Interval(3, 11)]

      expect(parse('1-1, 1, 3-11')).toEqual(intervals)
    })
  })

  describe('Should not accept', () => {
    test('dangling dash', () => {
      expect(() => parse('1-,')).toThrowError(new Error('Invalid input'))
      expect(() => parse('1-2,-1')).toThrowError(new Error('Invalid input'))
    })

    test('characters', () => {
      expect(() => parse('1-a')).toThrowError(new Error('Invalid input'))
      expect(() => parse('1-2,p-1,')).toThrowError(new Error('Invalid input'))
    })

    test('characters', () => {
      expect(() => parse('1-a')).toThrowError(new Error('Invalid input'))
      expect(() => parse('1-2,p-1,')).toThrowError(new Error('Invalid input'))
    })
  })
})
