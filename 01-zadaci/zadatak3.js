function provjera(broj) {
  if (broj >= 100 && broj <= 150000)
    return console.log(broj, "je unutar [100,150000]");
  else return console.log(broj, "nije unutar [100,150000]");
}
provjera(53);
