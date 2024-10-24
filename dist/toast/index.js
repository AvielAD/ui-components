"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Index = function (props) {
    //${props.Show ? "visible": "invisible"}
    return ((0, jsx_runtime_1.jsx)("div", { className: "".concat(props.Show ? "absolute" : "hidden", " mt-20 z-40 right-8 text-xs sm:text-base\n    ").concat(props.ServerMessage.Succedded ? "bg-success-100" : "bg-danger-100", " \n    ").concat(props.ServerMessage.Succedded ? "text-success-700" : "text-danger-700", " rounded-lg \n    ").concat(props.ServerMessage.Succedded ? "border-success-200" : "border-danger-200", " px-4 py-3"), children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("div", { className: '', children: (0, jsx_runtime_1.jsx)("div", { className: '', children: (0, jsx_runtime_1.jsx)("p", { children: props.ServerMessage.Message }) }) }) }) }));
};
exports.default = Index;
