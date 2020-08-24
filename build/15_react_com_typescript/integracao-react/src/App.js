System.register(["react", "./App.css", "./components/Contador"], function (exports_1, context_1) {
    "use strict";
    var react_1, Contador_1;
    var __moduleName = context_1 && context_1.id;
    function App() {
        return (<div className="App">
      <Contador_1.default valorInicial={9876}/>
    </div>);
    }
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (_1) {
            },
            function (Contador_1_1) {
                Contador_1 = Contador_1_1;
            }
        ],
        execute: function () {
            exports_1("default", App);
        }
    };
});
//# sourceMappingURL=App.js.map