class Data {
  // Público por padrão
  dia: number;
  public mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data // posso omitir os "()"
casamento.ano = 2017
console.log(casamento)

class DataEsperta {

  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) { }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversarioEsperto.dia = 4
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta // posso omitir os "()"
casamentoEsperto.ano = 2017
console.log(casamentoEsperto)

// Desafio classe Produto
// Atribuir: nome, preco, desconto
// Criar o construtor
// OBS 1.: Desconto é opcional (valor padrão)
// OBS 2.: Criar dois produtos: passando dois e três params
class Produto {
  constructor(public nome: string, public preco: number, public desconto: number = 0) { }

  // criar método precoComDesconto
  // quais são os parãmetros de retorno
  // Alterar método resumo para mostrar o preco com desconto

  public precoComDesconto(): number {
    return this.preco * (1 - this.desconto)
  }

  public resumo(): string {
    return `${this.nome} custa R$ ${this.precoComDesconto().toFixed(2).toLocaleString().replace('.', ',')} (${this.desconto * 100}% off)`
  }

}

const prod1 = new Produto('Cadeira', 199.90, 0.10)
const prod2 = new Produto('Mesa', 399.90, 0.25)

console.log(prod1.resumo())
console.log(prod2.resumo())

// Modificadores de acesso
// public
// private
// protected
// readonly

class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string, 
    public modelo: string, 
    private velocidadeMaxima: number = 200) {}

  protected alterarVelocidade(delta: number): number{
    const novaVelocidade = this.velocidadeAtual + delta
    const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

    if(velocidadeValida){
      this.velocidadeAtual = novaVelocidade
    }else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
    }

    return this.velocidadeAtual
  }

  public acelerar(): number{
    return this.alterarVelocidade(5)
  }

  public frear(): number{
    return this.alterarVelocidade(-5)
  }
}

const carro1 = new Carro('Ford', 'Ka', 185)

Array(50).fill(0).forEach(()=> carro1.acelerar())
console.log(carro1.acelerar())

Array(30).fill(0).forEach(()=> carro1.frear())
console.log(carro1.frear())

//simulando erros
// carro1.velocidadeAtual = 300
// console.log(carro1.velocidadeAtual)

// carro1.velocidadeMaxima = 500
// console.log(carro1.velocidadeMaxima)

// carro1.alterarVelocidade(150)
// console.log(carro1.velocidadeAtual)


// herança => reuso de código
class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number){
    super('Ferrari', modelo, velocidadeMaxima)
    // ... pode-se executar mais códigos aqui
  }

  public acelerar(): number{
    return this.alterarVelocidade(20)
  }

  public frear():number {
    return this.alterarVelocidade(-15)
  }
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.acelerar())
console.log(f40.acelerar())
console.log(f40.frear())
console.log(f40.frear())
console.log(f40.frear())


//Getter & Setters
class Pessoa {
  private _idade: number = 0

  get idade(): number{
    return this._idade
  }

  set idade(valor: number){
    if(valor >= 0 && valor <= 120){
      this._idade = valor
    }
  }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1.idade)

pessoa1.idade = -3
console.log(pessoa1.idade)

// Membros estáticos -> pertence a classe não a instância do objeto
// Atributos e métodos estáticos

class Matematica {
  static PI: number = 3.1416

  static areaCirc(raio: number): number {
    return Matematica.PI * raio * raio
  }
}

// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areaCirc(4))

console.log(Matematica.areaCirc(4))
// console.log(new Matematica().areaCirc(4)) // forma de chamar sem static

// classe abstratas
abstract class Calculo {
  protected resultado = 0
  abstract executar(...numeros: Array<number>): void

  getResultado(): number {
    return this.resultado
  }
}

class Soma extends Calculo {
  executar(...numeros: Array<number>): void {
    this.resultado = numeros.reduce( (total, atual) => total + atual)
  }
}

class Multiplicacao extends Calculo{
  executar(...numeros: Array<number>): void {
    this.resultado = numeros.reduce( (total, atual) => total * atual)
  }
}
// aqui é um exemplo de polimorfismo
let c1: Calculo = new Soma()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

c1 = new Multiplicacao()
c1.executar(1, 2, 3, 4, 5)
console.log(c1.getResultado())

// padrão de projeto singleton
// construtor privado
class Unico {
  private static instance: Unico = new Unico
  private constructor(){}

  static getInstance(): Unico{
    return Unico.instance // ou this.instance
  }

  agora(): Date {
    return new Date
  }
}

// const errado = new Unico()
// errado.agora()

console.log(Unico.getInstance().agora().toLocaleDateString())

// Atributos somente leitura (readonly)
class Aviao {
  public readonly modelo: string

  constructor(modelo: string, public readonly prefixo: string){
    this.modelo = modelo
  }
}

const turboHelice = new Aviao('TU-114', 'PT-ABC')
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'
console.log(turboHelice)