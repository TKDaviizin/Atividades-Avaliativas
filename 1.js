var soma = 0;
var i = 0;

do {
  if (i % 2 === 0) {
    soma += i;
  }
  i++;
}while (i <= 100)

console.log("A soma dos números pares de 0 a 100 é: " + soma);