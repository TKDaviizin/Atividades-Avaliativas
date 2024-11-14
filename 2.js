var soma = 0;
var i = 100;

do {
  if (i % 2 === 1) {
    soma += i;
  }
  i--;
}while (i >= 0)

console.log("A soma dos números ímpares de 0 a 100 é: " + soma);