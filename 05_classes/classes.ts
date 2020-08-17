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

  private alterarVelocidade(delta: number): number{
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