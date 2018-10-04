import * as evaluator from '../evaluator'

export default class Problem {
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
