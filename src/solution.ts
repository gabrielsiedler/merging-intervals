class Interval {
  start: number
  end: number

  constructor(start: number, end?: number) {
    this.start = start

    if (end) {
      this.end = end

      return
    }

    this.end = start
  }
}

const parse = (input: string) => {
  const inputWithoutSpaces = input.replace(/\s/g, '')
  const INPUT_REGEX = /^(\d+(-\d+)?,)*(\d+(-\d+)?)$/

  if (!INPUT_REGEX.test(inputWithoutSpaces)) throw new Error('Invalid input')

  const CHUNK_REGEX = /([^,])+/g

  const chunks = inputWithoutSpaces.match(CHUNK_REGEX)

  const chunksAsIntervals = chunks.map((chunk) => {
    const values = chunk.split('-')

    return new Interval(Number(values[0]), Number(values[1]))
  })

  return chunksAsIntervals
}

const merge = (intervals: Interval[]) => {
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

const a = '1-5, 2-10, 1-10'

const a1 = parse(a)
const b1 = merge(a1)

console.log(b1)
