"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Index = function (props) {
    return ((0, jsx_runtime_1.jsx)("div", { className: "", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-center items-center p-4 bg-white rounded-lg shadow-xs dark:bg-secondary-800", children: [(0, jsx_runtime_1.jsx)("div", { className: "p-4 mr-4 text-theme5-500 bg-theme5-100 rounded-full dark:text-theme5-100 dark:bg-theme5-500", children: (0, jsx_runtime_1.jsx)("i", { className: props.icon }) }), (0, jsx_runtime_1.jsxs)("div", { className: "", children: [(0, jsx_runtime_1.jsx)("p", { className: "mb-2 text-sm font-medium text-secondary-600 dark:text-secondary-400", children: props.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg font-semibold text-secondary-700 dark:text-secondary-200", children: props.value })] })] }) }));
};
exports.default = Index;
