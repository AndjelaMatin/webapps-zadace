let brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function djeljivi() {
  console.log("Brojevi djeljivi s 3:");
  for (let i of brojevi) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }
}
djeljivi();
