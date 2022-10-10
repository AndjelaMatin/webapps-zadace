var polje = [3, 4, 5, 6];

function obrni() {
  var p1 = [];
  for (let i = polje.length - 1; i >= 0; i--) {
    p1.push(polje[i]);
  }
  return console.log(p1);
}
obrni();
//console.log(polje.reverse());
