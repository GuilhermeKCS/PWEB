// Retorna o maior número entre três valores
function maiorNumero(a, b, c) {
    let maior = a;
    if (b > maior) {
      maior = b;
    }
    if (c > maior) {
      maior = c;
    }
    return maior;
  }
  
  // Coloca três números em ordem crescente
  function ordenarNumeros(a, b, c) {
    let numeros = [a, b, c];
    numeros.sort(function(a, b) {
      return a - b;
    });
    return numeros;
  }


// Retorna o maior número entre três valores
let x = 5, y = 10, z = 3;

let maior = maiorNumero(x, y, z);
document.write("O maior número é: " + maior);

let numerosOrdenados = ordenarNumeros(x, y, z);
document.write("Os números em ordem crescente são: " + numerosOrdenados);
