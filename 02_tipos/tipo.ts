// string
let nome: string = 'João' //tipo inferido automáticamente de forma implícita como string
console.log(nome)
// nome = 28 // gera erro de tipo atribuido

// numbers
let idade: number = 27
// idade = 'Ana'
idade = 27.5
console.log(idade)

// boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

// tipos explicitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = 'idade é 27'

// Array
// let hobbies: Array<string> = ['cozinhar', 'praticar esportes'] // formas equivalentes para declarar array
let hobbies: any[] = ['cozinhar', 'praticar esportes']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)

// tuplas -> quantidade pré definida de tipos
let endereco: [string, number, string] = ['Av Principal', 90, 'Casa 2']
console.log(endereco)
endereco = ['Rua Importante', 260, 'Bloco C']
console.log(endereco)

// enums
enum Cor {
  Cinza, // 0
  Verde = 100, // 1
  Azul = 10, // 2 -> passa a ser 101 por causa da atribuição acima
  Laranja,
  Amarelo,
  Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

// funções
function retornarMeuNome(): string {
  // return minhaIdade
  return nome
}

console.log(retornarMeuNome())

function digaOi(): void {
  console.log('Oi')
  // return minhaIdade
}

digaOi()
// parêtros tipados
function multiplicar(numA: number, numB: number): number {
  return numA * numB
}

// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(4.7, 9))

// atribuir funções a variáveis
// const teste = function (a: number, b: number): boolean {
//   return false
// }

// tipo função -> importante a ordem dos parâmetros (tipos declarados) e tipo de retorno
let calculo: (numeroA: number, numeroB: number) => number
// calculo = digaOi
// calculo()

calculo = multiplicar
console.log(calculo(5, 6))

// tipo Object
let usuario: { nome: string, idade: number } = {
  nome: 'João',
  idade: 27
}
console.log(usuario)
// usuario = {}

// usuario = {
//   name: 'Maria',
//   age: 31
// }

usuario = {
  idade: 31,
  nome: 'Maria'
}
console.log(usuario)

//desafio
let funcionario: { 
  supervisores: Array<string>, 
  baterPonto(hora: number): string 
} = {
  supervisores: ['Henrique', 'Anderson'],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return 'Ponto Normal!'
    } else {
      return 'Fora do Horário'
    }
  }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

// tipo alias
type Funcionario = {
  supervisores: Array<string>, 
  baterPonto(hora: number): string 
}

let funcionario2: Funcionario = {
  supervisores: ['Bia', 'Carlos'],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return 'Ponto Normal!'
    } else {
      return 'Fora do Horário'
    }
  }
}

console.log(funcionario2.supervisores)
console.log(funcionario2.baterPonto(8))
console.log(funcionario2.baterPonto(9))

// tipo Union 
let nota: string | number = 10
console.log(`Minha nota é ${nota}`)
nota = '10'
console.log(`Minha nota é ${nota}`)

// checando tipos => checado automaticamente
let valor = 30

if(typeof valor === 'number'){
  console.log('É um valor number')
}else{
  console.log(typeof valor)
}

// tipo never
function falha(msg: string): never{
  throw new Error(msg)
}

const produto = {
  nome: 'Sabão',
  preco: -1,
  validarProduto(){
    if(!this.nome || this.nome.trim().length == 0){
      falha('Precisa ter nome')
    }
    if(this.preco <= 0){
      falha('Preco inválido!!')
    }
  }
}

// produto.validarProduto()

// tipo null -> valores opcionais
let altura = 12
// altura = null

let alturaOpcional: number | null
alturaOpcional = null

type Contato = {
  nome: string,
  tel1: string,
  tel2: string | null  
}

const contato1: Contato = {
  nome: 'Fulano',
  tel1: '123456',
  tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

//tipo null -> melhor trabalhar com associção -> number | null
let poderNulo = null // any
// poderNulo = 12
console.log(poderNulo)
// poderNulo = 'abc'
console.log(poderNulo)

// desafio -> transformar em typescript

type contaBancaria = {
  saldo: number,
  depositar: (valor: number) => void
}
type correntista = {
  nome: string,
  contaBancaria: contaBancaria,
  contatos: Array<string>
}

let contaBancaria: contaBancaria = {
  saldo: 3456,
  depositar(valor) {
    return this.saldo += valor
  }
}

let correntista: correntista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)