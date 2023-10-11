import { twMerge } from 'tailwind-merge'
import classnames, { ArgumentArray } from 'classnames'

export default function cn(...args: ArgumentArray) {
  return twMerge(classnames(args))
}
