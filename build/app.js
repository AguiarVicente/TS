"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const a = 'Teste TS (WEB)!';
console.log(a);
// string
let nome = 'João'; //tipo inferido automáticamente de forma implícita como string
console.log(nome);
// nome = 28 // gera erro de tipo atribuido
// numbers
let idade = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos explicitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27'
// Array
// let hobbies: Array<string> = ['cozinhar', 'praticar esportes'] // formas equivalentes para declarar array
let hobbies = ['cozinhar', 'praticar esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);
// tuplas -> quantidade pré definida de tipos
let endereco = ['Av Principal', 90, 'Casa 2'];
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
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// any
let carro = 'BMW';
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
// const teste = function (a: number, b: number): boolean {
//   return false
// }
// tipo função -> importante a ordem dos parâmetros (tipos declarados) e tipo de retorno
let calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
// tipo Object
let usuario = {
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
let funcionario = {
    supervisores: ['Henrique', 'Anderson'],
    baterPonto(horario) {
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
let funcionario2 = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto(horario) {
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
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = '10';
console.log(`Minha nota é ${nota}`);
// checando tipos => checado automaticamente
let valor = 30;
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
const produto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto() {
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
let altura = 12;
// altura = null
let alturaOpcional;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '123456',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
//tipo null -> melhor trabalhar com associção -> number | null
let poderNulo = null; // any
// poderNulo = 12
console.log(poderNulo);
// poderNulo = 'abc'
console.log(poderNulo);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        return this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
let canal = 'Gaveta';
let inscritos = 610234;
// canal = inscritos
console.log(`Canal = ${canal}`);
// let nome: string = 'Pedro'
console.log(`Nome = ${nome}`);
function soma(a, b) {
    return a + b;
}
let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'ABC';
// function saudar(isManha: boolean, horas: number): string | null {
//   let a = 1
//   let saudacao: string
//   if(isManha){
//     saudacao = 'Bom dia!'
//   }else {
//     saudacao = 'Tenha uma boa vida!'
//   }
//   return saudacao
// }
// let & const
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco';
    console.log(acao);
}
const cpf = '123.456.000-99';
// cpf = '789.101.132-78'
console.log(cpf);
var segredo = 'externo';
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    {
        const def = 'def';
        console.log(def);
    }
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i)
// arrow function
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const saudacao = () => console.log('Olá!');
saudacao();
const falarCom = (pessoa) => console.log('Olá ' + pessoa);
falarCom('João');
// this
// function normalComThis() {
//   console.log(this)
// }
// normalComThis()
// const normalComThisEspecial = normalComThis
//   .bind({ nome: 'Ana' })
// normalComThisEspecial()
// // this???
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()
// const arrowComThisEspecial = normalComThis
//   .bind({ nome: 'Ana' })
// arrowComThisEspecial()
// parâmetro padrão
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim!');
}
contagemRegressiva();
contagemRegressiva(3);
// operador spread & rest (...) => spread (função) / rest (array / object)
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));
const turmaA = ['João', 'Maria', 'Fernanda'];
const turmaB = ['Fernando', 'Miguel', 'Lorena', ...turmaA];
console.log(turmaB);
function retornArray(...args) {
    return args;
}
const numeros = retornArray(1, 2, 4, 5, 6, ...numbers);
console.log(numeros);
// rest & spread (tupla)
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
// destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
// destructuring (objeto)
const item = {
    nome: 'SSD 480gb',
    preco: 200,
    caracteristicas: {
        w: 'importado'
    }
};
const nomeItem = item.nome;
const itemPreco = item.preco;
console.log(nomeItem, itemPreco);
const { nome: n, preco: p, caracteristicas: { w } } = item;
console.log(n);
console.log(p);
console.log(w);
// template string
const usuarioId = 'SuporteCod3r';
const notificacoes = '9';
const boaVindas = `Boas vindas ${usuarioId}
Notificações: ${notificacoes}`;
console.log(boaVindas);
console.log(`${(1 + 1) * 30}`);
console.log(`Motor -> ${caracteristicas[0]}`);
// DESAFIOS
// 1) dobro
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// 2) dizer olá
const dizerOla = (nomeOla = 'Pessoa') => console.log(`Olá ${nomeOla}`);
dizerOla();
dizerOla('Anna');
// 3) exercicio 3
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// 4) exercicio 4
const array = [55, 20, ...nums];
console.log(array);
// 5) exercicio 5
const notas = [8.5, 6.3, 9.4];
const [notas1, notas2, notas3] = notas;
console.log(notas1, notas2, notas3);
// 6) exercicio 6
const cientista = { primeiroNome: 'Will', experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
// Promise
function esperar3s(callback) {
    setTimeout(() => {
        callback('3 segundos depois');
    }, 3000);
}
// esperar3s(function(resultado: string){
//   console.log(resultado)
// })
// convertido para Promise
function esperar3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3 segundos depois promise...');
        }, 3000);
    });
}
// esperar3sPromise().then(dado => console.log(dado))
fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title, filme.episode_id))
    .catch(err => console.log(err));
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data; // posso omitir os "()"
casamento.ano = 2017;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta; // posso omitir os "()"
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);
// Desafio classe Produto
// Atribuir: nome, preco, desconto
// Criar o construtor
// OBS 1.: Desconto é opcional (valor padrão)
// OBS 2.: Criar dois produtos: passando dois e três params
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    // criar método precoComDesconto
    // quais são os parãmetros de retorno
    // Alterar método resumo para mostrar o preco com desconto
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `${this.nome} custa R$ ${this.precoComDesconto().toFixed(2).toLocaleString().replace('.', ',')} (${this.desconto * 100}% off)`;
    }
}
const prod1 = new Produto('Cadeira', 199.90, 0.10);
const prod2 = new Produto('Mesa', 399.90, 0.25);
console.log(prod1.resumo());
console.log(prod2.resumo());
// Modificadores de acesso
// public
// private
// protected
// readonly
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Ka', 185);
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
Array(30).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());
//simulando erros
// carro1.velocidadeAtual = 300
// console.log(carro1.velocidadeAtual)
// carro1.velocidadeMaxima = 500
// console.log(carro1.velocidadeMaxima)
// carro1.alterarVelocidade(150)
// console.log(carro1.velocidadeAtual)
// herança => reuso de código
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
        // ... pode-se executar mais códigos aqui
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.frear());
console.log(f40.frear());
console.log(f40.frear());
//Getter & Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -3;
console.log(pessoa1.idade);
// Membros estáticos -> pertence a classe não a instância do objeto
// Atributos e métodos estáticos
class Matematica {
    static areaCirc(raio) {
        return Matematica.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areaCirc(4))
console.log(Matematica.areaCirc(4));
// console.log(new Matematica().areaCirc(4)) // forma de chamar sem static
// classe abstratas
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((total, atual) => total + atual);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((total, atual) => total * atual);
    }
}
// aqui é um exemplo de polimorfismo
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicacao();
c1.executar(1, 2, 3, 4, 5);
console.log(c1.getResultado());
// padrão de projeto singleton
// construtor privado
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance; // ou this.instance
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
// const errado = new Unico()
// errado.agora()
console.log(Unico.getInstance().agora().toLocaleDateString());
// Atributos somente leitura (readonly)
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('TU-114', 'PT-ABC');
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'
console.log(turboHelice);
// // Exercício 1 - Classe
// function Moto(nome) {
//   this.nome = nome
//   this.velocidade = 0
//   this.buzinar = function() {
//       console.log('Toooooooooot!')
//   }
//   this.acelerar= function(delta) {
//       this.velocidade = this.velocidade + delta
//   }
// }
// var moto = new Moto('Ducati')
// moto.buzinar()
// console.log(moto.velocidade)
// moto.acelerar(30)
// console.log(moto.velocidade)
// // Exercício 2 - Herança
// var objeto2D = {
//   base: 0,
//   altura: 0
// }
// var retangulo = Object.create(objeto2D)
// retangulo.base = 5
// retangulo.altura = 7
// retangulo.area = function() {
//   return this.base * this.altura
// }
// console.log(retangulo.area())
// // Exercício 3 - Getters & Setters
// var estagiario = {
//   _primeiroNome: ''
// }
// Object.defineProperty(estagiario, 'primeiroNome', {
//   get: function () {
//       return this._primeiroNome
//   },
//   set: function (valor) {
//       if (valor.length >= 3) {
//           this._primeiroNome = valor
//       } else {
//           this._primeiroNome = ''
//       }
//   },
//   enumerable: true,
//   configurable: true
// })
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Le'
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Leonardo'
// console.log(estagiario.primeiroNome)
// Exercício 1 - Classe
class Moto {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        console.log('Toooooooooot!');
    }
    acelerar(delta) {
        return this.velocidade = this.velocidade + delta;
    }
}
const moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
class Objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    constructor() {
        super();
    }
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new Retangulo;
retangulo.base = 5;
retangulo.altura = 7;
console.log(retangulo.area());
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
const estagiario = new Estagiario();
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        const PI = 3.14;
        function circunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.circunferencia = circunferencia;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        function retangulo(base, altura) {
            return base * altura;
        }
        Area.retangulo = retangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
// comentário interpretado pelo ts (importando namespaces)
///<reference path="geometriaCirc.ts" />
///<reference path="geometriaRec.ts" />
// const PI: number = 2.99
console.log(Geometria.Area.circunferencia(10));
console.log(Geometria.Area.retangulo(12, 20));
// console.log(PI)
System.register("08_modulos/circunferencia", [], function (exports_1, context_1) {
    "use strict";
    var PI;
    var __moduleName = context_1 && context_1.id;
    function areaCircunferencia(raio) {
        return Math.pow(raio, 2) * PI;
    }
    exports_1("areaCircunferencia", areaCircunferencia);
    return {
        setters: [],
        execute: function () {
            PI = 3.14;
        }
    };
});
System.register("08_modulos/retangulo", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function areaRetangulo(base, altura) {
        return base * altura;
    }
    exports_2("default", areaRetangulo);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("08_modulos/modulos", ["08_modulos/retangulo", "08_modulos/circunferencia"], function (exports_3, context_3) {
    "use strict";
    var retangulo_1, circunferencia_1, digaOi;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (retangulo_1_1) {
                retangulo_1 = retangulo_1_1;
            },
            function (circunferencia_1_1) {
                circunferencia_1 = circunferencia_1_1;
            }
        ],
        execute: function () {
            console.log('Modulo carregado...');
            console.time();
            console.log(retangulo_1.default(7, 8));
            console.log(circunferencia_1.areaCircunferencia(2));
            console.timeEnd();
            digaOi = require('./novo').digaOi;
            console.log(digaOi('Ana'));
        }
    };
});
module.exports = {
    digaOi(nome) {
        return 'Oi ' + nome;
    }
};
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({nome: 'Jonas', idade: 27, altura: 1.75})
pessoa.saudar('Skywalker');
// usando no contexto de classes
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
}
const meucliente = new Cliente();
meucliente.nome = 'Han';
saudarComOla(meucliente);
meucliente.saudar('Solo');
console.log(meucliente.ultimaCompra.toLocaleDateString());
let potencia;
potencia = function (base, expoente) {
    return Array(expoente).fill(base).reduce((a, b) => a * b);
    // return Math.pow(base, expoente)
};
console.log(potencia(2, 5));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
console.log(x);
console.log(y);
console.log(z);
x.log();
y.log();
z.log();
const cli = {
    nome: 'Pedro',
    toString() {
        return this.nome;
    }
};
cli.log();
function echo(obejeto) {
    return obejeto;
}
console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({ nome: 'João', idade: 27 }));
// Usando GENERICS
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'João', idade: 27 }).nome);
// GENERICS disponíveis na API
const avaliacao = [10, 9.3, 7.7];
avaliacao.push(8.4);
// avaliacao.push('5.5')
console.log(avaliacao);
// Array
function imprimir(args) {
    return args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3, 4]);
imprimir([1, 2, 3]);
imprimir(['Ana', 'Carlos', 'Daniel']);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
// Classe com GENERICS
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// console.log(new OperacaoBinaria('Bom ', 'dia').executar())
// console.log(new OperacaoBinaria(3, 7).executar())
// console.log(new OperacaoBinaria(3, ' Opa').executar())
// console.log(new OperacaoBinaria({}, {}).executar())
class SomaBinario extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinario(30, 434).executar());
class DataGen {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
class DiferencaEntreData extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const d1 = new DataGen(1, 2, 2020);
const d2 = new DataGen(5, 2, 2020);
console.log(new DiferencaEntreData(d1, d2).executar());
// desafio Classe Fila
// Atributo: fila (Array)
// Métodos: entrar, proximo, imprimir
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila('Gui', 'Pedro', 'Ana', 'Lu');
fila.imprimir();
fila.entrar('Rafael');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
// CONSTRAINTS
// class Fila<T extends number | string>
const novaFila = new Fila(1, 2, 3);
novaFila.imprimir();
class Mapa {
    constructor() {
        this.itens = new Array();
    }
    obter(chave) {
        const resultado = this.itens.filter(i => i.chave === chave);
        return resultado ? resultado[0] : null;
    }
    colocar(par) {
        const encontrado = this.obter(par.chave);
        if (encontrado) {
            encontrado.valor = par.valor;
        }
        else {
            this.itens.push(par);
        }
    }
    limpar() {
        this.itens = new Array();
    }
    imprimir() {
        console.log(this.itens);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
function logarClasse(construtor) {
    console.log(construtor);
}
function decoratorVazio(_) { }
// Decorator Factory
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(obj) {
    return function (_) {
        console.log(`${obj.a} ${obj.b}`);
    };
}
function logarObjeto(construtor) {
    console.log('Carregado...');
    return class extends construtor {
        constructor(...args) {
            console.log('Antes ...');
            super(...args);
            console.log('Depois ...');
        }
    };
}
// @logarClasse
// @decorator({a: 'Teste', b: 123})
// @logarClasseSe(true)
// @logarObjeto
// @imprimivel
class Eletrodomestico {
    constructor() {
        console.log('Novo...');
    }
}
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
// (<any> new Eletrodomestico()).imprimir()
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
// desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
function perfilAdmin(construtor) {
    return class extends construtor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão');
            }
        }
    };
}
// decorator associado ao método
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    naoNegativo
], ContaCorrente.prototype, "saldo", void 0);
__decorate([
    congelar,
    __param(0, paramInfo)
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
const cc = new ContaCorrente(10248.57);
cc.sacar(5000);
cc.sacar(5248.57);
cc.sacar(.10);
console.log(cc.getSaldo());
// cc.getSaldo = function() {
//   return this['saldo'] + 7000
// }
// cc.getSaldo = function() {
//   return 1000_000_000
// }
console.log(cc.getSaldo());
// Object.freeze()
function congelar(alvo, nomePropriedade, descritor) {
    console.log(alvo);
    console.log(nomePropriedade);
    descritor.writable = false;
}
// decorator associado ao atributo
function naoNegativo(alvo, nomePropriedade) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function () {
            return alvo["_" + nomePropriedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error('Saldo inválido');
            }
            else {
                alvo["_" + nomePropriedade] = valor;
            }
        }
    });
}
// decorator de parâmetro de um método
function paramInfo(alvo, nomeMetodo, indiceParam) {
    console.log(`Alvo: ${alvo}`);
    console.log(`Método: ${nomeMetodo}`);
    console.log(`Índice Param: ${indiceParam}`);
}
$('body').append('Usando jQuery');
// $('body').append('<h1>jQuery</h1>')
System.register("13_gulp_com_typescript/src/model/vendavel", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("13_gulp_com_typescript/src/model/livro", [], function (exports_5, context_5) {
    "use strict";
    var Livro;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [],
        execute: function () {
            Livro = class Livro {
                constructor(nome, preco, desconto) {
                    this.nome = nome;
                    this.preco = preco;
                    this.desconto = desconto;
                }
                precoComDesconto() {
                    return this.preco * (1 - this.desconto);
                }
            };
            exports_5("default", Livro);
        }
    };
});
System.register("13_gulp_com_typescript/src/main", ["jquery", "13_gulp_com_typescript/src/model/livro"], function (exports_6, context_6) {
    "use strict";
    var jquery_1, livro_1, livro;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            },
            function (livro_1_1) {
                livro_1 = livro_1_1;
            }
        ],
        execute: function () {
            livro = new livro_1.default('Dom Quixote', 108.80, 0.10);
            // console.log(livro.precoComDesconto())
            jquery_1.default('body').append(`<h1>${livro.nome}</h1>`);
            jquery_1.default('body').append(`
  <h2>Preço: R$${livro.precoComDesconto()}</h2>
`);
        }
    };
});
System.register("14_webpak_com_typescript/src/model/vendavel", [], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("14_webpak_com_typescript/src/model/livro", [], function (exports_8, context_8) {
    "use strict";
    var Livro;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [],
        execute: function () {
            Livro = class Livro {
                constructor(nome, preco, desconto) {
                    this.nome = nome;
                    this.preco = preco;
                    this.desconto = desconto;
                }
                precoComDesconto() {
                    return this.preco * (1 - this.desconto);
                }
            };
            exports_8("default", Livro);
        }
    };
});
System.register("14_webpak_com_typescript/src/main", ["jquery", "14_webpak_com_typescript/src/model/livro"], function (exports_9, context_9) {
    "use strict";
    var jquery_2, livro_2, livro;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [
            function (jquery_2_1) {
                jquery_2 = jquery_2_1;
            },
            function (livro_2_1) {
                livro_2 = livro_2_1;
            }
        ],
        execute: function () {
            livro = new livro_2.default('Dom Quixote', 108.80, 0.10);
            // console.log(livro.precoComDesconto())
            jquery_2.default('body').append(`<h1>Nome: ${livro.nome}</h1>`);
            jquery_2.default('body').append(`
  <h2>Preço: R$${livro.precoComDesconto()}</h2>
`);
        }
    };
});
System.register("15_react_com_typescript/integracao-react/src/App", ["react", "./App.css", "./components/Contador"], function (exports_10, context_10) {
    "use strict";
    var react_1, Contador_1;
    var __moduleName = context_10 && context_10.id;
    function App() {
        return (<div className="App">
      <Contador_1.default valorInicial={9876}/>
    </div>);
    }
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (_1) {
            },
            function (Contador_1_1) {
                Contador_1 = Contador_1_1;
            }
        ],
        execute: function () {
            exports_10("default", App);
        }
    };
});
// This optional code is used to register a service worker.
// register() is not called by default.
System.register("15_react_com_typescript/integracao-react/src/serviceWorker", [], function (exports_11, context_11) {
    "use strict";
    var isLocalhost;
    var __moduleName = context_11 && context_11.id;
    function register(config) {
        if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
            // The URL constructor is available in all browsers that support SW.
            const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
            if (publicUrl.origin !== window.location.origin) {
                // Our service worker won't work if PUBLIC_URL is on a different origin
                // from what our page is served on. This might happen if a CDN is used to
                // serve assets; see https://github.com/facebook/create-react-app/issues/2374
                return;
            }
            window.addEventListener('load', () => {
                const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
                if (isLocalhost) {
                    // This is running on localhost. Let's check if a service worker still exists or not.
                    checkValidServiceWorker(swUrl, config);
                    // Add some additional logging to localhost, pointing developers to the
                    // service worker/PWA documentation.
                    navigator.serviceWorker.ready.then(() => {
                        console.log('This web app is being served cache-first by a service ' +
                            'worker. To learn more, visit https://bit.ly/CRA-PWA');
                    });
                }
                else {
                    // Is not localhost. Just register service worker
                    registerValidSW(swUrl, config);
                }
            });
        }
    }
    exports_11("register", register);
    function registerValidSW(swUrl, config) {
        navigator.serviceWorker
            .register(swUrl)
            .then(registration => {
            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                if (installingWorker == null) {
                    return;
                }
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            // At this point, the updated precached content has been fetched,
                            // but the previous service worker will still serve the older
                            // content until all client tabs are closed.
                            console.log('New content is available and will be used when all ' +
                                'tabs for this page are closed. See https://bit.ly/CRA-PWA.');
                            // Execute callback
                            if (config && config.onUpdate) {
                                config.onUpdate(registration);
                            }
                        }
                        else {
                            // At this point, everything has been precached.
                            // It's the perfect time to display a
                            // "Content is cached for offline use." message.
                            console.log('Content is cached for offline use.');
                            // Execute callback
                            if (config && config.onSuccess) {
                                config.onSuccess(registration);
                            }
                        }
                    }
                };
            };
        })
            .catch(error => {
            console.error('Error during service worker registration:', error);
        });
    }
    function checkValidServiceWorker(swUrl, config) {
        // Check if the service worker can be found. If it can't reload the page.
        fetch(swUrl, {
            headers: { 'Service-Worker': 'script' }
        })
            .then(response => {
            // Ensure service worker exists, and that we really are getting a JS file.
            const contentType = response.headers.get('content-type');
            if (response.status === 404 ||
                (contentType != null && contentType.indexOf('javascript') === -1)) {
                // No service worker found. Probably a different app. Reload the page.
                navigator.serviceWorker.ready.then(registration => {
                    registration.unregister().then(() => {
                        window.location.reload();
                    });
                });
            }
            else {
                // Service worker found. Proceed as normal.
                registerValidSW(swUrl, config);
            }
        })
            .catch(() => {
            console.log('No internet connection found. App is running in offline mode.');
        });
    }
    function unregister() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready
                .then(registration => {
                registration.unregister();
            })
                .catch(error => {
                console.error(error.message);
            });
        }
    }
    exports_11("unregister", unregister);
    return {
        setters: [],
        execute: function () {
            // This lets the app load faster on subsequent visits in production, and gives
            // it offline capabilities. However, it also means that developers (and users)
            // will only see deployed updates on subsequent visits to a page, after all the
            // existing tabs open on the page have been closed, since previously cached
            // resources are updated in the background.
            // To learn more about the benefits of this model and instructions on how to
            // opt-in, read https://bit.ly/CRA-PWA
            isLocalhost = Boolean(window.location.hostname === 'localhost' ||
                // [::1] is the IPv6 localhost address.
                window.location.hostname === '[::1]' ||
                // 127.0.0.0/8 are considered localhost for IPv4.
                window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        }
    };
});
System.register("15_react_com_typescript/integracao-react/src/index", ["react", "react-dom", "./index.css", "./App", "15_react_com_typescript/integracao-react/src/serviceWorker"], function (exports_12, context_12) {
    "use strict";
    var react_2, react_dom_1, App_1, serviceWorker;
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [
            function (react_2_1) {
                react_2 = react_2_1;
            },
            function (react_dom_1_1) {
                react_dom_1 = react_dom_1_1;
            },
            function (_2) {
            },
            function (App_1_1) {
                App_1 = App_1_1;
            },
            function (serviceWorker_1) {
                serviceWorker = serviceWorker_1;
            }
        ],
        execute: function () {
            react_dom_1.default.render(<react_2.default.StrictMode>
    <App_1.default />
  </react_2.default.StrictMode>, document.getElementById('root'));
            // If you want your app to work offline and load faster, you can change
            // unregister() to register() below. Note this comes with some pitfalls.
            // Learn more about service workers: https://bit.ly/CRA-PWA
            serviceWorker.unregister();
        }
    };
});
System.register("15_react_com_typescript/integracao-react/src/setupTests", ["@testing-library/jest-dom/extend-expect"], function (exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [
            function (_3) {
            }
        ],
        execute: function () {
        }
    };
});
System.register("15_react_com_typescript/integracao-react/src/decorators/logRender", [], function (exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    function logRender(componente) {
        return class extends componente {
            render() {
                console.log('Renderizando o componente...');
                const r = super.render();
                console.log('Renderização concluída!');
                return r;
            }
        };
    }
    exports_14("default", logRender);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("15_react_com_typescript/integracao-react/src/components/Contador", ["react", "./ContadorValor", "15_react_com_typescript/integracao-react/src/decorators/logRender"], function (exports_15, context_15) {
    "use strict";
    var react_3, ContadorValor_1, logRender_1, Contador;
    var __moduleName = context_15 && context_15.id;
    return {
        setters: [
            function (react_3_1) {
                react_3 = react_3_1;
            },
            function (ContadorValor_1_1) {
                ContadorValor_1 = ContadorValor_1_1;
            },
            function (logRender_1_1) {
                logRender_1 = logRender_1_1;
            }
        ],
        execute: function () {
            Contador = class Contador extends react_3.Component {
                constructor() {
                    super(...arguments);
                    this.state = { valor: this.props.valorInicial || 0 };
                    this.setValor = (delta) => {
                        this.setState({
                            valor: this.state.valor + delta
                        });
                    };
                }
                render() {
                    return (<div>
        <ContadorValor_1.default contador={this.state.valor}/>
        <button onClick={() => this.setValor(10)}>+</button>
        <button onClick={() => this.setValor(-10)}>-</button>
      </div>);
                }
            };
            Contador = __decorate([
                logRender_1.default
            ], Contador);
            exports_15("default", Contador);
        }
    };
});
System.register("15_react_com_typescript/integracao-react/src/components/ContadorValor", ["react"], function (exports_16, context_16) {
    "use strict";
    var react_4;
    var __moduleName = context_16 && context_16.id;
    return {
        setters: [
            function (react_4_1) {
                react_4 = react_4_1;
            }
        ],
        execute: function () {
            exports_16("default", (props) => <p>{props.contador}</p>);
        }
    };
});
System.register("16_vue_com_typescript/integracao_vue/src/main", ["vue", "./App.vue"], function (exports_17, context_17) {
    "use strict";
    var vue_1, App_vue_1;
    var __moduleName = context_17 && context_17.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (App_vue_1_1) {
                App_vue_1 = App_vue_1_1;
            }
        ],
        execute: function () {
            vue_1.default.config.productionTip = false;
            new vue_1.default({
                render: (h) => h(App_vue_1.default),
            }).$mount('#app');
        }
    };
});
//# sourceMappingURL=app.js.map