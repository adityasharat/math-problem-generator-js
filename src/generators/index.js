import { fill, permutations, shuffle } from '../utils'
import Problem from './Problem'

function generate(min, max, size) {
  return shuffle(permutations(fill(min, max), size));
}

function getGeneratorParams(level) {
  let min, max, size;

  switch (level) {
    case 1:
      min = 0;
      max = 9;
      size = 2;
      break;
    case 2:
      min = 10;
      max = 99;
      size = 2;
      break;
    default:
      min = 100;
      max = 999;
      size = 2;
      break;
  }

  return { min, max, size, level };
}

export class SimpleGenerator {
  constructor({min, max, size, level}) {
    this.min = min;
    this.max = max;
    this.level = level;
    this.problems = generate(min, max, size);
    this.index = 0;
  }

  next(op) {
    const set = this.problems[this.index];
    this.index++;
    return new Problem(set[0], op, set[1]);
  }
}

export function generator(level) {
  const params = getGeneratorParams(level);
  return new SimpleGenerator(params);
}
