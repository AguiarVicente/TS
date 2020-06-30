var lista = [1, 2, 3];
console.log("Um array " + lista);
var somarValor = 'Somar valor';
var strLen = somarValor.length;
console.log("strLen tem " + strLen + " caracteres");
var verdade;
verdade = true;
console.log(verdade);
var Cores;
(function (Cores) {
    Cores[Cores["Red"] = 1] = "Red";
    Cores[Cores["Green"] = 2] = "Green";
    Cores[Cores["Blue"] = 3] = "Blue";
})(Cores || (Cores = {}));
console.log("Imprimindo um enum de cor: " + Cores.Red);
function error(message) {
    throw new Error(message);
}
function fail() {
    //console.log(`${error('Imprimindo o tipo never em uma função!')}`)
}
fail();
var n = null;
var u = undefined;
console.log("Null: " + n + " - Undefined: " + u);
var num;
num = 10;
console.log("Tipo n\u00FAmero " + num);
var obj = {
    nome: 'Criado um objeto',
    idade: 34
};
console.log(obj['nome']);
var mensagem;
mensagem = 'Uma String';
console.log(mensagem);
var tupla;
tupla = ['Uma tupla com valor', 10];
console.log(tupla);
var indefinido = undefined;
console.log("Tipo void: " + indefinido);
