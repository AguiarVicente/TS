System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logRender(componente) {
        return class extends componente {
            render() {
                console.log('Renderizando o componente...');
                const r = super.render();
                console.log('Renderização concluída!');
                return r;
            }
        };
    }
    exports_1("default", logRender);
    return {
        setters: [],
        execute: function () {
        }
    };
});
//# sourceMappingURL=logRender.js.map