var saldo = 1000.00; //Float 1.36

function inicio() {
    nome();
    var escolha = parseInt(prompt('Selecione uma opção 1.) Saldo 2.) Extrato 3.) Saque 4.) Depósito 5.) Transferência 6.) Sair'));

    switch (escolha) {
        case 1:
            ver_saldo();
        case 2:
            ver_extrato();
        case 3:
            fazer_saque();
        case 4:
            fazer_deposito();
        case 5:
            fazer_transferencia();
        case 6:
            sair();
        default:
            erro();
    }


    /*
    if (escolha === 1) {
        ver_saldo();
    } else if (escolha === 2) {
        ver_extrato();
    } else if (escolha === 3) {
        fazer_saque();
    } else if (escolha === 4) {
        fazer_deposito();
    } else if (escolha === 5) {
        fazer_transferencia();
    } else if (escolha === 6) {
        sair();
    } else {
        erro();
    }
    */
}

function nome() {
    var nome = prompt("Por favor informe seu nome: ");
    if (isNaN(nome) == true) {
        alert("Olá " + nome + " é um prazer ter você por aqui!");
    } else {
        alert("Não aceitamos numeros.");
        inicio();
    }
}

function fazer_transferencia() {
    validar_senha();
    var numero_conta = parseInt(prompt("Favor informar numero da conta: "))
    if (isNaN(numero_conta) || numero_conta === '') {
        alert('Por favor, informe um número: ');
        fazer_transferencia();
    } else if (numero_conta <= 0) {
        erro();
        fazer_transferencia();
    }

    var quantidade_transferida = parseFloat(prompt("Informe um valor de tranferencia: "))
    if (isNaN(quantidade_transferida) || quantidade_transferida === '') {
        alert('Por favor, informe um número: ');
        fazer_transferencia();
    } else if (quantidade_transferida > saldo || quantidade_transferida <= 0) {
        erro();
        fazer_transferencia();
    } else {
        saldo -= quantidade_transferida;
        alert("o seu saldo é " + saldo);
    }
}

function ver_extrato() {
    validar_senha();
    alert("Você executou a compra dos seguintes items: ")
    alert("RX580 8gb Vram ----- R$ 1000");
    alert("Cadeira Gamer ----- R$ 1600");
    alert("Mouse Gamer ----- R$ 600");
    alert("Camiseta Logtech ----- R$ 100");
    alert("Fantazia de dinosauro deluxe ----- R$ 900");

    inicio();
}

function ver_saldo() {
    validar_senha();
    alert('Seu saldo atual é: ' + saldo);
    inicio();
}

function fazer_deposito() {
    validar_senha();
    var deposito = parseFloat(prompt('Qual o valor para depósito?'));
    // Not a Number = NaN
    // e um não numero = isNaN
    if (isNaN(deposito) || deposito === '') {
        alert('Por favor, informe um número:');
        fazer_deposito();
    } else {
        saldo += deposito;
        ver_saldo();
    }
}

function fazer_saque() {
    validar_senha();
    var saque = parseFloat(prompt('Qual o valor para saque?'));
    if (isNaN(saque) || saque === '') {
        erro();
        fazer_saque();
    } else if (saque <= 0 || saque > saldo) {
        erro();
        fazer_saque();
    } else {
        saldo -= saque;
        ver_saldo();
    }
}

function validar_senha() {
    var senha = parseInt(prompt("Por favor digite a senha: "));
    if (senha != 3589) {
        alert("Senha incorreta!");
        validar_senha();
    }
}

function erro() {
    alert('Por favor, informe um número:');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert(nome + ", foi um prazer ter você por aqui!");
        window.close();
    } else {
        inicio();
    }
}


inicio();