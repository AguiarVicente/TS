System.register(["./retangulo", "./circunferencia"], function (exports_1, context_1) {
    "use strict";
    var retangulo_1, circunferencia_1, digaOi;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (retangulo_1_1) {
                retangulo_1 = retangulo_1_1;
            },
            function (circunferencia_1_1) {
                circunferencia_1 = circunferencia_1_1;
            }
        ],
        execute: function () {
            console.log('Modulo carregado...');
            console.time();
            console.log(retangulo_1.default(7, 8));
            console.log(circunferencia_1.areaCircunferencia(2));
            console.timeEnd();
            digaOi = require('./novo').digaOi;
            console.log(digaOi('Ana'));
        }
    };
});
//# sourceMappingURL=modulos.js.map