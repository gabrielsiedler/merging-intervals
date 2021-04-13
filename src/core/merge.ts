import { Interval } from './Interval'

export const merge = (intervals: Interval[]) => {
  intervals.sort((a, b) => a.start - b.start)

  let current = intervals[0]
  const final = []

  intervals.forEach((interval) => {
    if (current.end >= interval.start) {
      current = new Interval(current.start, Math.max(current.end, interval.end))

      return
    }

    final.push(current)
    current = interval
  })

  final.push(current)

  return final
}
