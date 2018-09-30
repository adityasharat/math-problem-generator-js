export class Problem {
  constructor(x, op, y) {
    this.x = x;
    this.op = op;
    this.y = y;
  }
  toString() {
    return this.x + this.op + this.y;
  }
}

export class RandomStatelessGenerator {
  constructor(min, max) {
    this.min = min;
    this.max = max;
    this.set = new Set();
  }

  next(op) {
    const x = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    const y = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

    return new Problem(x, op, y);
  }
}
