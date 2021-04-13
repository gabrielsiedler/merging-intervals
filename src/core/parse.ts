import { Interval } from './Interval'

export const parse = (input: string = '') => {
  const inputWithoutSpaces = input.replace(/\s/g, '')
  const INPUT_REGEX = /^(\d+(-\d+)?,)*(\d+(-\d+)?,?)$/

  if (!INPUT_REGEX.test(inputWithoutSpaces)) throw new Error('Invalid input')

  const CHUNK_REGEX = /([^,])+/g

  const chunks = inputWithoutSpaces.match(CHUNK_REGEX)

  const chunksAsIntervals = chunks.map((chunk) => {
    const values = chunk.split('-')

    return new Interval(Number(values[0]), Number(values[1]))
  })

  return chunksAsIntervals
}
