import { fill, permutations, shuffle } from '../utils'
import Problem from './Problem'

export function getSize(level) {
  return level;
}

function generate(min, max, size) {
  return shuffle(permutations(fill(min, max), getSize(size)));
}

export class SimpleGenerator {
  constructor(min, max, level) {
    this.min = min;
    this.max = max;
    this.level = level;
    this.problems = generate(min, max, level);
    this.index = 0;
  }

  next(op) {
    const set = this.problems[this.index];
    this.index++;
    return new Problem(set[0], op, set[1]);
  }
}
