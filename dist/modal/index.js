"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Index = function (props) {
    return ((0, jsx_runtime_1.jsx)("div", { onClick: function () { return props.close(); }, className: "".concat(props.show ? "fixed" : "hidden", " inset-0 z-30 flex bg-black bg-opacity-50 items-center justify-center"), children: (0, jsx_runtime_1.jsx)("div", { onClick: function (e) { return e.stopPropagation(); }, className: "w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-secondary-800 rounded-lg m-4 max-w-xl", children: (0, jsx_runtime_1.jsx)("div", { className: "", children: props.children }) }) }));
};
exports.default = Index;
