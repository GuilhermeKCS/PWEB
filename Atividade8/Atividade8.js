
var numMat = 2;

var sexo = new Array(numMat);
var idade = new Array(numMat);
var opiniao = new Array(numMat);
var mediaIdade = 0;
var maioridade = 0;
var menoridade = 1000;
var somaIdade = 0;
var qtdePessimo = 0;
var bom = 0
var otimo = 0;
var mulheres = 0
var homens = 0;

for(var i = 0; i<numMat; i++){
    sexo[i] = prompt("Digite o sexo");
    idade[i] = parseInt(prompt("Digite a idade"));
    opiniao[i] = parseInt(prompt("Digite a opinião"));
}

for(var i = 0; i< numMat; i++){

    if(idade[i] != null){
        somaIdade = somaIdade + idade[i];
    }

    if (idade[i] >  maioridade){
        maioridade = idade[i];
    }
    
    if (idade[i] <  menoridade){
        menoridade = idade[i];
    }

    if (opiniao[i] == 1){
        qtdePessimo += 1;
    }

    if (opiniao[i] == 3){
        bom++;
    }

    if (opiniao[i] == 4){
        otimo++;
    }
    
    if(sexo[i] == "M")
        homens++;

    if(sexo[i] == "F")
        mulheres++;
}

mediaIdade = somaIdade / numMat;


alert("A media de idade é: " + mediaIdade + "<br>");
alert("A menor idade é: " + menoridade + "<br>");
alert("A maior idade é: " + maioridade + "<br>");
alert("O numero de pessoas que responderam péssimo: " + qtdePessimo + "<br>");
alert("A porcentagem de pessoas que responderam bom é:  " + ((bom * 100)/numMat).toFixed(2) + "%" + "<br>");
alert("A porcentagem de pessoas que responderam otimo é: " + ((otimo * 100)/numMat).toFixed(2) + "%" + "<br>");
alert("A quantidade de mulheres que responderam é de: " + mulheres + "<br>");
alert("A quantidade de Homens que responderam é de: " + homens+ "<br>");