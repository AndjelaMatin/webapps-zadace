o1 = { a: 1, b: 2, c: 3 };
o2 = { a: 321, b: 3, c: 1 };
function kljucevi(o1, o2) {
  for (var i of Object.keys(o1)) {
    var postoji = Object.hasOwn(o2, i);
    if (!postoji) {
      return false;
    }
  }
  return true;
}

console.log(kljucevi(o1, o2));
