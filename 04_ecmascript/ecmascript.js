"use strict";
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
//# sourceMappingURL=ecmascript.js.map