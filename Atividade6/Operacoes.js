function calcular() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    var soma = numero1 + numero2;
    var subtracao = numero1 - numero2;
    var produto = numero1 * numero2;
    var divisao = numero1 / numero2;
    var resto = numero1 % numero2;

    document.getElementById("soma").innerHTML = "A soma dos números é: " + soma;
    document.getElementById("subtracao").innerHTML = "A subtração do primeiro pelo segundo é: " + subtracao;
    document.getElementById("produto").innerHTML = "O produto dos números é: " + produto;
    document.getElementById("divisao").innerHTML = "A divisão do primeiro pelo segundo é: " + divisao;
    document.getElementById("resto").innerHTML = "O resto da divisão do primeiro pelo segundo é: " + resto;
}
