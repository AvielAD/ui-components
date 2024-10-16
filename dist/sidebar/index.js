"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var link_1 = __importDefault(require("next/link"));
var Index = function (props) {
    return ((0, jsx_runtime_1.jsx)("div", { className: "bg-secondary-50 dark:bg-secondary-900", children: (0, jsx_runtime_1.jsx)("aside", { className: "bg-white dark:bg-secondary-800 ", onClick: function (e) { return e.stopPropagation(); }, children: (0, jsx_runtime_1.jsxs)("div", { className: "py-4 text-secondary-500 dark:text-secondary-400", children: [(0, jsx_runtime_1.jsx)("a", { className: "ml-6 text-lg font-bold text-secondary-800 dark:text-secondary-200", href: "", children: "Empresa" }), (0, jsx_runtime_1.jsx)("ul", { className: "mt-6", children: props.routes.map(function (item, index) { return ((0, jsx_runtime_1.jsx)("li", { className: "px-6 py-3", children: (0, jsx_runtime_1.jsxs)(link_1.default, { className: "inline-flex items-center w-full text-sm font-semibold text-secondary-800 transition-colors duration-150 hover:text-secondary-800 dark:hover:text-secondary-200 dark:text-secondary-100", href: item.route, children: [(0, jsx_runtime_1.jsx)("i", { className: "".concat(item.icon, " text-lg") }), (0, jsx_runtime_1.jsx)("span", { className: "ml-4", children: item.nameroute })] }) }, index)); }) }), props.actions.map(function (item, index) { return ((0, jsx_runtime_1.jsx)("div", { className: "px-6 my-6", children: (0, jsx_runtime_1.jsxs)("button", { onClick: function () { return item.setaction(); }, className: "flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-theme3-600 border border-transparent rounded-lg active:bg-theme3-600 hover:bg-theme3-700 focus:outline-none focus:shadow-outline-theme3", children: [item.nameaction, " ", (0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)("i", { className: "bi bi-plus-square" }) })] }) }, index)); })] }) }) }));
};
exports.default = Index;
