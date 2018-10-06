import { fill, permutations, shuffle } from '../utils'
import Problem from './Problem'

function generate(min, max, size) {
  return shuffle(permutations(fill(min, max), getSize(size)));
}

function getGeneratorParams(level) {
  let min, max;

  switch (level) {
    case 1:
      min = 0;
      max = 9;
      break;
    case 2:
      min = 10;
      max = 99;
      break;
    default:
      min = 100;
      max = 999;
      break;
  }

  return { min, max, level };
}

export function getSize(level) {
  return level;
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
