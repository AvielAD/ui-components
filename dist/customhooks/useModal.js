"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useModal = function () {
    var _a = (0, react_1.useState)(false), show = _a[0], setShow = _a[1];
    var changeShow = function () {
        setShow(!show);
    };
    return {
        show: show,
        changeShow: changeShow
    };
};
exports.default = useModal;
