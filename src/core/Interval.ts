export class Interval {
  start: number
  end: number

  constructor(start: number, end?: number) {
    if (start && end && start > end) {
      this.start = end
      this.end = start

      return
    }

    this.start = start

    if (end) {
      this.end = end

      return
    }

    this.end = start
  }
}
