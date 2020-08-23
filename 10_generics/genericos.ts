function echo(obejeto: any){
  return obejeto
}

console.log(echo('João').length)
console.log(echo(27).length)
console.log(echo({nome: 'João', idade: 27}))

// Usando GENERICS
function echoMelhorado<Tipo>(objeto: Tipo): Tipo {
  return objeto
}

console.log(echoMelhorado<string>('João').length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({nome: 'João', idade: 27}).nome)

// GENERICS disponíveis na API
const avaliacao: Array<number> = [ 10, 9.3, 7.7]
avaliacao.push(8.4)
// avaliacao.push('5.5')
console.log(avaliacao)

// Array
function imprimir<Tipo>(args: Tipo[]) {
  return args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3, 4])
imprimir<number>([1, 2, 3])
imprimir<string>(['Ana', 'Carlos', 'Daniel'])
imprimir<{nome: string, idade: number}>([
  {nome: 'Fulano', idade: 22},
  {nome: 'Cicrano', idade: 23},
  {nome: 'Beltrano', idade: 24}
])

type Aluno = {nome: string, idade: number}

imprimir<Aluno>([
  {nome: 'Fulano', idade: 22},
  {nome: 'Cicrano', idade: 23},
  {nome: 'Beltrano', idade: 24}
])

// Tipo GENERICS
type Echo = <Tipo>(data: Tipo) => Tipo
const chamarEcho: <Echo>(data: Echo) => Echo = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa'))

// Classe com GENERICS
abstract class OperacaoBinaria<Tipo, Retorno> {
  constructor(public operando1: Tipo, 
    public operando2: Tipo){}

  abstract executar(): Retorno
}

// console.log(new OperacaoBinaria('Bom ', 'dia').executar())
// console.log(new OperacaoBinaria(3, 7).executar())
// console.log(new OperacaoBinaria(3, ' Opa').executar())
// console.log(new OperacaoBinaria({}, {}).executar())

class SomaBinario extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2
  }
}

console.log(new SomaBinario(30, 434).executar())

class DataGen {
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

class DiferencaEntreData extends OperacaoBinaria<DataGen, string>{
  getTime(data: DataGen): number{
    let { dia, mes, ano } = data
    return new Date(`${mes}/${dia}/${ano}`).getTime()
  }

  executar(): string {
    const t1 = this.getTime(this.operando1)
    const t2 = this.getTime(this.operando2)
    const diferenca = Math.abs(t1 - t2)
    const dia = 1000 * 60 * 60 * 24
    return `${Math.ceil(diferenca / dia)} dia(s)`
  }
}

const d1 = new DataGen(1, 2, 2020)
const d2 = new DataGen(5, 2, 2020)
console.log(new DiferencaEntreData(d1, d2).executar())

// desafio Classe Fila
// Atributo: fila (Array)
// Métodos: entrar, proximo, imprimir

class Fila<T extends number | string> {
  private fila: Array<T>
  constructor(...args: T[]){
    this.fila = args
  }

  entrar(elemento: T){
    this.fila.push(elemento)
  }

  proximo(): T | null {
    if(this.fila.length >= 0 && this.fila[0]){
      const primeiro = this.fila[0]
      this.fila.splice(0, 1)
      return primeiro
    }else {
      return null
    }
  }

  imprimir(){
    console.log(this.fila)
  }
}

const fila = new Fila<string>('Gui', 'Pedro', 'Ana', 'Lu')

fila.imprimir()
fila.entrar('Rafael')
fila.imprimir()
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())
fila.imprimir()

// CONSTRAINTS
// class Fila<T extends number | string>

const novaFila = new Fila<number>(1, 2, 3)
novaFila.imprimir()

// desafio 
// Array de Objetos (Chave/Valor) -> items
// Métodos: obter(chave), colocar({C, V})
// limpar(), imprimir()
type Par<C, V> = {chave: C, valor: V}
class Mapa<C, V>{
  itens: Array<Par<C, V>> = new Array<Par<C, V>>()
  obter(chave: C): Par<C, V> | null{
    const resultado = this.itens.filter( i => i.chave === chave)
    return resultado ? resultado[0] : null
  }
  colocar(par: Par<C, V>){
    const encontrado = this.obter(par.chave)
    if(encontrado){
      encontrado.valor = par.valor
    }else{
      this.itens.push(par)
    }
  }
  limpar(){
    this.itens = new Array<Par<C, V>>()
  }
  imprimir(){
    console.log(this.itens)
  }
}

const mapa = new Mapa<number, string>()
mapa.colocar({chave: 1, valor: 'Pedro'})
mapa.colocar({chave: 2, valor: 'Rebeca'})
mapa.colocar({chave: 3, valor: 'Maria'})
mapa.colocar({chave: 1, valor: 'Gustavo'})

console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()