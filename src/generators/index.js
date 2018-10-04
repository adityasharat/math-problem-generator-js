import { fill, permutations, shuffle } from '../utils'
import * as evaluator from '../evaluator'

export function getSize(level) {
  return level;
}

function generate(min, max, size) {
  const array = fill(min, max);
  return permutations(array, 2);
}

export class Problem {
  constructor(x, op, y) {
    this.x = x;
    this.op = op;
    this.y = y;
  }
  toString() {
    return this.x + this.op + this.y;
  }
  evaluate() {
    return evaluator.evaluate(this.toString());
  }
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
