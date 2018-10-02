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
}

export function fill(min, max) {
  return Array.from({ length: max - min + 1 }, (_, i) => i);
}

export function permutations(list, maxLen) {
  var perm = list.map(val => [val]);
  return permute(list, perm, maxLen, 1);
}

export function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
