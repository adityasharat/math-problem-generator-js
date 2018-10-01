function fill(min, max) {
  return Array.from({ length: max - min + 1 }, (_, i) => i);
}

function permute(list, perm, maxLen, currLen) {
  if (currLen === maxLen) {
      return perm;
  }
  for (var i = 0, len = perm.length; i < len; i++) {
    var currPerm = perm.shift();
    for (var k = 0; k < list.length; k++) {
        perm.push(currPerm.concat(list[k]));
    }
  }
  return permute(list, perm, maxLen, currLen + 1);
};

function permutations(list, maxLen) {
  var perm = list.map(val => [val]);
  return permute(list, perm, maxLen, 1);
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
}

function generate(min, max) {
  const array = fill(min, max);
}

export class RandomStatelessGenerator {
  constructor(min, max) {
    this.min = min;
    this.max = max;
    this.problems = generate(min, max);
  }

  next(op) {
    const x = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    const y = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

    return new Problem(x, op, y);
  }
}
