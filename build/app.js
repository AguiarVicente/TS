"use strict";
var a = 'Teste TS (WEB)!';
console.log(a);
// string
var nome = 'João'; //tipo inferido automáticamente de forma implícita como string
console.log(nome);
// nome = 28 // gera erro de tipo atribuido
// numbers
var idade = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);
// boolean
var possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos explicitos
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27'
// Array
// let hobbies: Array<string> = ['cozinhar', 'praticar esportes'] // formas equivalentes para declarar array
var hobbies = ['cozinhar', 'praticar esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);
// tuplas -> quantidade pré definida de tipos
var endereco = ['Av Principal', 90, 'Casa 2'];
console.log(endereco);
endereco = ['Rua Importante', 260, 'Bloco C'];
console.log(endereco);
// enums
var Cor;
// enums
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// any
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// funções
function retornarMeuNome() {
    // return minhaIdade
    return nome;
}
console.log(retornarMeuNome());
function digaOi() {
    console.log('Oi');
    // return minhaIdade
}
digaOi();
// parêtros tipados
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(4.7, 9));
// atribuir funções a variáveis
var teste = function (a, b) {
    return false;
};
// tipo função -> importante a ordem dos parâmetros (tipos declarados) e tipo de retorno
var calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
// tipo Object
var usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
// usuario = {}
// usuario = {
//   name: 'Maria',
//   age: 31
// }
usuario = {
    idade: 31,
    nome: 'Maria'
};
console.log(usuario);
//desafio
var funcionario = {
    supervisores: ['Henrique', 'Anderson'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto Normal!';
        }
        else {
            return 'Fora do Horário';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
var funcionario2 = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto Normal!';
        }
        else {
            return 'Fora do Horário';
        }
    }
};
console.log(funcionario2.supervisores);
console.log(funcionario2.baterPonto(8));
console.log(funcionario2.baterPonto(9));
// tipo Union 
var nota = 10;
console.log("Minha nota \u00E9 " + nota);
nota = '10';
console.log("Minha nota \u00E9 " + nota);
// checando tipos => checado automaticamente
var valor = 30;
if (typeof valor === 'number') {
    console.log('É um valor number');
}
else {
    console.log(typeof valor);
}
// tipo never
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter nome');
        }
        if (this.preco <= 0) {
            falha('Preco inválido!!');
        }
    }
};
// produto.validarProduto()
// tipo null -> valores opcionais
var altura = 12;
// altura = null
var alturaOpcional;
alturaOpcional = null;
var contato1 = {
    nome: 'Fulano',
    tel1: '123456',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
//tipo null -> melhor trabalhar com associção -> number | null
var poderNulo = null; // any
// poderNulo = 12
console.log(poderNulo);
// poderNulo = 'abc'
console.log(poderNulo);
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        return this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
var canal = 'Gaveta';
var inscritos = 610234;
// canal = inscritos
console.log("Canal = " + canal);
// let nome: string = 'Pedro'
console.log("Nome = " + nome);
function soma(a, b) {
    return a + b;
}
var qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'ABC';
function saudar(isManha, horas) {
    var a = 1;
    var saudacao;
    if (isManha) {
        saudacao = 'Bom dia!';
    }
    else {
        saudacao = 'Tenha uma boa vida!';
    }
    return saudacao;
}
//# sourceMappingURL=app.js.map