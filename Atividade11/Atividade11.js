function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;
  
    this.calcularArea = function() {
      return this.base * this.altura;
    }
  }
  let retangulo = new Retangulo(5, 10);
document.write("A área do retangulo é:" + retangulo.calcularArea()); // 50


// Função tipo Conta
function Conta(nomeCorrentista, banco, numeroConta, saldo) {
    this.nomeCorrentista = nomeCorrentista;
    this.banco = banco;
    this.numeroConta = numeroConta;
    this.saldo = saldo;
  
    this.getNomeCorrentista = function() {
      return this.nomeCorrentista;
    }
  
    this.setNomeCorrentista = function(nomeCorrentista) {
      this.nomeCorrentista = nomeCorrentista;
    }
  
    this.getBanco = function() {
      return this.banco;
    }
  
    this.setBanco = function(banco) {
      this.banco = banco;
    }
  
    this.getNumeroConta = function() {
      return this.numeroConta;
    }
  
    this.setNumeroConta = function(numeroConta) {
      this.numeroConta = numeroConta;
    }
  
    this.getSaldo = function() {
      return this.saldo;
    }
  
    this.setSaldo = function(saldo) {
      this.saldo = saldo;
    }
  }
  
  // Função Corrente com Saldo Especial
  function CorrenteComSaldoEspecial(nomeCorrentista, banco, numeroConta, saldo, limite) {
    Conta.call(this, nomeCorrentista, banco, numeroConta, saldo);
    this.limite = limite;
  
    this.getLimite = function() {
      return this.limite;
    }
  
    this.setLimite = function(limite) {
      this.limite = limite;
    }
  }
  
  // Função Poupança com Juros e Data de Vencimento
  function PoupancaComJurosDataVencimento(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
    Conta.call(this, nomeCorrentista, banco, numeroConta, saldo);
    this.juros = juros;
    this.dataVencimento = dataVencimento;
  
    this.getJuros = function() {
      return this.juros;
    }
  
    this.setJuros = function(juros) {
      this.juros = juros;
    }
  
    this.getDataVencimento = function() {
      return this.dataVencimento;
    }
  
    this.setDataVencimento = function(dataVencimento) {
      this.dataVencimento = dataVencimento;
    }
  }
  
  // Criando objetos e mostrando seus dados
  let corrente = new CorrenteComSaldoEspecial("João ", "FATE.BANK", "1234-5 ", 1000, 500);
  document.writeln("<br><br><br>Nome do Banco: " + corrente.getBanco()); // FATE.BANK
  document.writeln("<br>Nome do Correntista: " + corrente.getNomeCorrentista()); // "João"
  document.writeln("<br>Saldo: " + corrente.getSaldo()); // 1000
  document.writeln("<br>Limite: " + corrente.getLimite()); // 500
 
  
  let poupanca = new PoupancaComJurosDataVencimento("Maria ", "TIJOLO.BANK", "5678-9 ", 5000, 2.5, " 01/01/2024 ");
  document.writeln("<br><br><br>Nome do Banco: " + poupanca.getBanco()); // TIJOLO.BANK
  document.writeln("<br>Nome do Correntista: " + poupanca.getNomeCorrentista()); // "João"
  document.writeln("<br>Saldo: " + poupanca.getSaldo()); // 5000
  document.writeln("<br>Juros: " + poupanca.getJuros()); // 2.5
  document.writeln("<br>Data do vencimento: " + poupanca.getDataVencimento()); // "01/01/2024"
  

  