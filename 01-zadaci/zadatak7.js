function brojX(x) {
  var rez = 1;
  if (x >= 0 && x <= 1000) {
    if (x % 7 == 0) {
      while (x != 0) {
        rez = rez * x;
        x = x - 7;
      }
    } else if (x % 7 != 0) {
      x = x - (x % 7);
      while (x != 0) {
        rez = rez * x;
        x = x - 7;
      }
    }
  }
  console.log(rez);
}
brojX(23);
