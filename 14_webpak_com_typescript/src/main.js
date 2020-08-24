"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
const livro_1 = __importDefault(require("./model/livro"));
const livro = new livro_1.default('Dom Quixote', 108.80, 0.10);
// console.log(livro.precoComDesconto())
jquery_1.default('body').append(`<h1>Nome: ${livro.nome}</h1>`);
jquery_1.default('body').append(`
  <h2>Preço: R$${livro.precoComDesconto()}</h2>
`);
//# sourceMappingURL=main.js.map