
//função conta
function Conta(nomeCorrentista, nomeBanco, numConta, saldo){
    this.nomeCorrentista = nomeCorrentista;
    this.nomeBanco = nomeBanco;
    this.numConta = numConta;
    this.saldo = saldo;

    this.setNomeCorrentista = function (nome){
        nomeCorrentista = nome;
    }
    this.setNomeBanco = function (banco){
        nomeBanco = banco;
    }
    this.setNumConta = function(conta){
        numConta = conta;
    }
    this.setSaldo = function(vSaldo){
        saldo = vSaldo;
    }
    this.getnomeCorrentista = function(){
        return nomeCorrentista;
    }
    this.getNomeBanco= function(){
        return nomeBanco;
    }
    this.getNumConta = function(){
        return numConta;
    }
    this.getSaldo = function (){
        return saldo;
    }
}

//função corrente
function Corrente (salEspecial){
    this.salEspecial = salEspecial;

    this.setSalEspecial = function(valSaldoEsp){
        salEspecial = valSaldoEsp;
    }
    this.getSalEspecial = function (){
        return salEspecial;
    }
}

//função poupança
function Poupanca (juros, dataVencimento){
    this.juros = juros;
    this.dataVencimento = dataVencimento;

    
    this.setjuros = function (valJuros){
        juros = valJuros;
    }
    this.setdataVencimento = function (dataVenc){
        dataVencimento = dataVenc;
    }
    this.getjuros = function(){
        return juros;
    }
    this.getdataVencimento = function (){
        return dataVencimento;
    }
}

//criação do objeto Conta Corrente        
Corrente.prototype = new Conta();

var contaCorrente = new Corrente();

contaCorrente.setNomeCorrentista('José da Silva');
contaCorrente.setNomeBanco('CEF');
contaCorrente.setNumConta('100-2');
contaCorrente.setSaldo('1500,00');
contaCorrente.setSalEspecial('1000,00');

//Criação do Objeto Poupança
Poupanca.prototype = new Conta();

var contaPoupanca = new Poupanca();

contaPoupanca.setNomeCorrentista('Augusto Braga');
contaPoupanca.setNomeBanco('Banco do Povo');
contaPoupanca.setNumConta('0332-5');
contaPoupanca.setSaldo('10.000,00');
contaPoupanca.setjuros('0,5%');
contaPoupanca.setdataVencimento("15/11/2021");


document.getElementById('corrente').innerHTML = `CONTA CORRENTE<br>Nome: ${contaCorrente.getnomeCorrentista()}<br>Banco: ${contaCorrente.getNomeBanco()}<br>Número da conta: ${contaCorrente.getNumConta()}<br>Saldo: R$ ${contaCorrente.getSaldo()}<br>Saldo especial: R$ ${contaCorrente.getSalEspecial()}<br>`


document.getElementById('poupanca').innerHTML = `CONTA POUPANÇA<br>Nome: ${contaPoupanca.getnomeCorrentista()}<br>Banco: ${contaPoupanca.getNomeBanco()}<br>Número da conta: ${contaPoupanca.getNumConta()}<br>Saldo: R$ ${contaPoupanca.getSaldo()}<br>Juros: ${contaPoupanca.getjuros()}<br>Data de Vencimento: ${contaPoupanca.getdataVencimento()}`