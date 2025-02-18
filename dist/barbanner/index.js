"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Index = function (props) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "container grid px-6 mx-auto", children: [(0, jsx_runtime_1.jsxs)("h2", { className: "my-6 text-2xl font-semibold text-secondary-700 dark:text-secondary-200 flex justify-between", children: [(0, jsx_runtime_1.jsx)("p", { className: "", children: props.title }), props.button ?
                        (0, jsx_runtime_1.jsxs)("button", { className: "text-white bg-theme3-600 hover:bg-theme3-500 focus:ring-4 rounded-lg px-5 py-2.5 text-center flex align-middle justify-end", onClick: function () { var _a; return (_a = props.button) === null || _a === void 0 ? void 0 : _a.action(); }, children: [(0, jsx_runtime_1.jsx)("i", { className: "mr-2 text-2xl ".concat(props.button.icon) }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg", children: props.button.title })] })
                        : null] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between p-4 mb-8 text-sm font-semibold text-theme3-100 bg-theme3-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-theme3", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center", children: [(0, jsx_runtime_1.jsx)("i", { className: "bi bi-star mr-2" }), (0, jsx_runtime_1.jsx)("span", { children: props.starmessage })] }), (0, jsx_runtime_1.jsxs)("span", { children: [props.arrowmessage, " ", (0, jsx_runtime_1.jsx)("i", { className: "bi bi-arrow-right" })] })] })] }));
};
exports.default = Index;
