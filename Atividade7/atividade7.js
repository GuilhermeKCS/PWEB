function jogar(jogada_usuario) {
    // Define as opções disponíveis
    const opcoes = ["pedra", "papel", "tesoura"];
  
    // Faz a escolha aleatória do computador
    const jogada_computador = opcoes[Math.floor(Math.random() * 3)];
  
    // Define os resultados possíveis
    const resultados = {
      empate: "Empate!",
      pedra_tesoura: "Pedra quebra tesoura. Você ganhou!",
      tesoura_papel: "Tesoura corta papel. Você ganhou!",
      papel_pedra: "Papel cobre a pedra. Você ganhou!",
      tesoura_pedra: "Pedra quebra tesoura. Você perdeu!",
      papel_tesoura: "Tesoura corta papel. Você perdeu!",
      pedra_papel: "Papel cobre a pedra. Você perdeu!"
    };
  
    // Verifica o resultado do jogo
    const resultado = resultados[jogada_usuario + "_" + jogada_computador] || resultados.empate;
  
    // Exibe o resultado na tela
    document.getElementById("resultado").innerHTML = resultado;
  
    // Desabilita as jogadas após escolher
    const jogadas = document.querySelectorAll(".jogada");
    jogadas.forEach(jogada => {
      jogada.style.pointerEvents = "none";
    });
  }
  
  function reiniciar() {
    // Habilita as jogadas novamente
    const jogadas = document.querySelectorAll(".jogada");
    jogadas.forEach(jogada => {
      jogada.style.pointerEvents = "auto";
    });
  
    // Limpa o resultado da tela
    document.getElementById("resultado").innerHTML = "";
}
  