function error(message: string): never {
  throw new Error(message);
}

function fail(){
  //console.log(`${error('Imprimindo o tipo never em uma função!')}`)
}

fail()
