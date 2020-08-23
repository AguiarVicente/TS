function logarClasse(construtor: Function){
  console.log(construtor)
}

function decoratorVazio(_: Function){}
// Decorator Factory
function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : decoratorVazio
}

function decorator(obj: {a: string, b?: number}){
  return function(_: Function){
    console.log(`${obj.a} ${obj.b}`)
  }
}


type Contrutor = { new(...args: any[]): {}}

function logarObjeto(construtor: Contrutor){
  console.log('Carregado...')
  return class extends construtor {
    constructor(...args: any[]){
      console.log('Antes ...')
      super(...args)
      console.log('Depois ...')
    }
  }
}

interface Eletrodomestico {
  imprimir(): void
}

// @logarClasse
// @decorator({a: 'Teste', b: 123})
// @logarClasseSe(true)
// @logarObjeto
// @imprimivel
class Eletrodomestico {
  constructor(){
    console.log('Novo...')
  }
}

function imprimivel(construtor: Function){
  construtor.prototype.imprimir = function(){
    console.log(this)
  }
}

// (<any> new Eletrodomestico()).imprimir()
const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()

// desafio Decorator perfilAdmin
const usuarioLogado = {
  nome: 'Guilherme Filho',
  email: 'guigui@gmail.com',
  admin: true
}

@perfilAdmin
class MudancaAdministrativa {
  critico() {
      console.log('Algo crítico foi alterado!')
  }
}

new MudancaAdministrativa().critico()

function perfilAdmin<Tipo extends Contrutor>(construtor: Tipo){
  return class extends construtor {
    constructor(...args: any[]){
      super(...args)
      if(!usuarioLogado || !usuarioLogado.admin){
        throw new Error('Sem permissão')
      }
    }
  }
}

// decorator associado ao método

class ContaCorrente {
  @naoNegativo
  private saldo: number

  constructor(saldo: number){
    this.saldo = saldo
  }

  @congelar
  sacar(@paramInfo valor: number){
    if(valor <= this.saldo){
      this.saldo -= valor
      return true
    }else{
      return false
    }
  }

  @congelar
  getSaldo() {
    return this.saldo
  }
}

const cc = new ContaCorrente(10248.57)
cc.sacar(5000)
cc.sacar(5248.57)
cc.sacar(.10)
console.log(cc.getSaldo())

// cc.getSaldo = function() {
//   return this['saldo'] + 7000
// }
// cc.getSaldo = function() {
//   return 1000_000_000
// }
console.log(cc.getSaldo())

// Object.freeze()
function congelar(alvo: any, nomePropriedade: string, descritor: PropertyDescriptor){
  console.log(alvo)
  console.log(nomePropriedade)
  descritor.writable = false
}

// decorator associado ao atributo
function naoNegativo(alvo: any, nomePropriedade: string){
  delete alvo[nomePropriedade]
  Object.defineProperty(alvo, nomePropriedade, {
    get: function(): any {
      return alvo["_" + nomePropriedade]
    },
    set: function(valor: any): void {
      if(valor < 0){
        throw new Error('Saldo inválido')
      }else{
        alvo["_" + nomePropriedade] = valor
      }
    }
  })
}

// decorator de parâmetro de um método
function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number){
  console.log(`Alvo: ${alvo}`)
  console.log(`Método: ${nomeMetodo}`)
  console.log(`Índice Param: ${indiceParam}`)
}