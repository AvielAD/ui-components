"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useToast = function () {
    var _a = (0, react_1.useState)({ show: false, response: { Message: "", Succedded: false } }), toast = _a[0], setToast = _a[1];
    var changeToast = function (data) {
        setToast({
            show: true,
            response: data
        });
        var timer = setInterval(function () {
            setToast({
                show: false,
                response: {
                    Message: "",
                    Succedded: false
                }
            });
            clearInterval(timer);
        }, 3000);
    };
    return {
        toast: toast,
        changeToast: changeToast
    };
};
exports.default = useToast;
