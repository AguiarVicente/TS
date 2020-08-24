"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = logRender;
//# sourceMappingURL=logRender.js.map