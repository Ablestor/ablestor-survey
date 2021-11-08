"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClickAway = void 0;
var react_1 = require("react");
var useClickAway = function (target, callback) {
    var handleClickAway = function (event) {
        if (target.current && !target.current.contains(event.target)) {
            callback();
        }
    };
    (0, react_1.useEffect)(function () {
        document.addEventListener('click', handleClickAway);
        return function () {
            document.removeEventListener('click', handleClickAway);
        };
    });
};
exports.useClickAway = useClickAway;
