function somme() {
    var somme = 0;
    for (var i = 0; i < arguments.length; i++) {
      somme += arguments[i];
    }
    return somme;
}

console.log(somme(1, 2, 7, 3));

