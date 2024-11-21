// 4
function quatro(x) {
    x = 15;
    var u = x + 3;
    var i = u + 3;
    var fim = x * u * i; 
    return { u, i, fim }; 
}

var resultado = quatro();
console.log(resultado.fim);
