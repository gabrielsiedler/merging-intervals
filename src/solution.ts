import { merge } from './core/merge'
import { parse } from './core/parse'

const argv = process.argv[2]

const parsedInput = parse(argv)
const mergedIntervals = merge(parsedInput)

console.log(mergedIntervals)
