function pretvori(min){
    var sat=min/60;
    var minuti=min%60;
    return console.log("Ovo je",sat.toFixed(),"sata i",minuti,"minute")
};
pretvori(120);