System.register(["vue", "./App.vue"], function (exports_1, context_1) {
    "use strict";
    var vue_1, App_vue_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (vue_1_1) {
                vue_1 = vue_1_1;
            },
            function (App_vue_1_1) {
                App_vue_1 = App_vue_1_1;
            }
        ],
        execute: function () {
            vue_1.default.config.productionTip = false;
            new vue_1.default({
                render: (h) => h(App_vue_1.default),
            }).$mount('#app');
        }
    };
});
//# sourceMappingURL=main.js.map