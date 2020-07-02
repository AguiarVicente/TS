interface IPessoa {
  nome: string;
  idade: number;
  sexo?: string;
  altura?: number;
}

interface IEscolaridade extends IPessoa {
  readonly nivel?: string;
}

function pessoa(p: IEscolaridade): string {
  return `Eu me chamo: ${p.nome} com idade: ${p.idade} e com escolaridade nível ${p.nivel}`
}
let ser = { nome: 'Nil', idade: 34, nivel: 'Superior' }

console.log(pessoa(ser))