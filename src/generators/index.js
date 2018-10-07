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
      min = 10;
      max = 99;
      size = 2;
      break;
  }

  return { level, min, max, size };
}

export class SimpleGenerator {
  constructor({level, min, max, size}) {
    this.level = level;
    this.min = min;
    this.max = max;
    this.problems = generate(min, max, size);
    this.index = 0;
  }

  next(op) {
    if (this.problems.length >= this.index) {
      return null;
    }
    const set = this.problems[this.index];
    this.index++;
    return new Problem(set[0], op, set[1]);
  }
}

export function create(level) {
  const params = getGeneratorParams(level);
  return new SimpleGenerator(params);
}

export { Problem }
