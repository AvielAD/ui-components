"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Index = function (props) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "container grid px-6 mx-auto", children: [(0, jsx_runtime_1.jsx)("h2", { className: "my-6 text-2xl font-semibold text-secondary-700 dark:text-secondary-200", children: props.title }), (0, jsx_runtime_1.jsxs)("a", { className: "flex items-center justify-between p-4 mb-8 text-sm font-semibold text-theme3-100 bg-theme3-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-theme3", href: "", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center", children: [(0, jsx_runtime_1.jsx)("i", { className: "bi bi-star mr-2" }), (0, jsx_runtime_1.jsx)("span", { children: props.starmessage })] }), (0, jsx_runtime_1.jsxs)("span", { children: [props.arrowmessage, " ", (0, jsx_runtime_1.jsx)("i", { className: "bi bi-arrow-right" })] })] })] }));
};
exports.default = Index;
