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
}

function getSize(level) {
  return level;
}

export class RandomStatelessGenerator {
  constructor(min, max, level) {
    this.min = min;
    this.max = max;
    this.problems = generate(min, max, getSize(level));
    this.index = 0;
  }

  next(op) {
    const set = this.problems[this.index];
    this.index++;
    return new Problem(set[0], op, set[1]);
  }
}
