interface Humano {
  nome: string
  idade?: number // atributo opcional
  [prop: string]: any // atributo dinâmica
  // saudar?(sobrenome: string): void // declarando método dentro da interface
  saudar(sobrenome: string): void // declarando método dentro da interface
}

function saudarComOla(pessoa: Humano) {
  console.log('Olá, ' + pessoa.nome)
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = 'Joana'
}

const pessoa: Humano = {
  nome: 'João',
  idade: 27,
  saudar(sobrenome: string) {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
  }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({nome: 'Jonas', idade: 27, altura: 1.75})
pessoa.saudar('Skywalker')

// usando no contexto de classes
class Cliente implements Humano {
  nome: string = ''
  ultimaCompra: Date = new Date
  saudar(sobrenome: string) {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
  }
}

const meucliente = new Cliente()
meucliente.nome = 'Han'
saudarComOla(meucliente)
meucliente.saudar('Solo')
console.log(meucliente.ultimaCompra.toLocaleDateString())

interface FuncaoCalculo {
  (a: number, b: number): number
}

let potencia: FuncaoCalculo
potencia = function (base: number, expoente: number): number {
  return Array(expoente).fill(base).reduce((a, b) => a * b)
  // return Math.pow(base, expoente)
}
console.log(potencia(2, 5))

// herança com interfaces
interface A {
  a(): void
}

interface B {
  b(): void
}

interface ABC extends A, B {
  c(): void
}

class RealA implements A {
  a(): void { }
}

class RealAB implements A, B {
  a(): void { }
  b(): void { }
}

class RealABC implements ABC {
  a(): void { }
  b(): void { }
  c(): void { }
}

abstract class AbstrataABD implements A, B {
  a(): void { }
  b(): void { }
  abstract d(): void
}

interface Object {
  log(): void
}

Object.prototype.log = function () {
  console.log(this.toString())
}

const x = 2
const y = 3
const z = 4

console.log(x)
console.log(y)
console.log(z)

x.log()
y.log()
z.log()

const cli = { 
  nome: 'Pedro', 
  toString() { 
    return this.nome 
  } 
}

cli.log()