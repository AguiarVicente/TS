"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const Contador_1 = __importDefault(require("./components/Contador"));
function App() {
    return (<div className="App">
      <Contador_1.default valorInicial={9876}/>
    </div>);
}
exports.default = App;
//# sourceMappingURL=App.js.map