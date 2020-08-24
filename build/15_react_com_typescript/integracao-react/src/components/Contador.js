System.register(["react", "./ContadorValor", "../decorators/logRender"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var react_1, ContadorValor_1, logRender_1, Contador;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (ContadorValor_1_1) {
                ContadorValor_1 = ContadorValor_1_1;
            },
            function (logRender_1_1) {
                logRender_1 = logRender_1_1;
            }
        ],
        execute: function () {
            Contador = class Contador extends react_1.Component {
                constructor() {
                    super(...arguments);
                    this.state = { valor: this.props.valorInicial || 0 };
                    this.setValor = (delta) => {
                        this.setState({
                            valor: this.state.valor + delta
                        });
                    };
                }
                render() {
                    return (<div>
        <ContadorValor_1.default contador={this.state.valor}/>
        <button onClick={() => this.setValor(10)}>+</button>
        <button onClick={() => this.setValor(-10)}>-</button>
      </div>);
                }
            };
            Contador = __decorate([
                logRender_1.default
            ], Contador);
            exports_1("default", Contador);
        }
    };
});
//# sourceMappingURL=Contador.js.map