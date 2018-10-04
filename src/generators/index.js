import { fill, permutations, shuffle } from '../utils'
import Problem from './Problem'

export function getSize(level) {
  return level;
}

function generate(min, max, size) {
  const array = fill(min, max);
  return permutations(array, 2);
}

export class SimpleGenerator {
  constructor(min, max, level) {
    this.min = min;
    this.max = max;
    this.problems = shuffle(generate(min, max, getSize(level)));
    this.index = 0;
  }

  next(op) {
    const set = this.problems[this.index];
    this.index++;
    return new Problem(set[0], op, set[1]);
  }
}
