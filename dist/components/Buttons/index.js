"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconButton = exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var styled_1 = require("./styled");
var Button = function (props) { return react_1.default.createElement(styled_1.StyledButton, __assign({}, props)); };
exports.Button = Button;
var IconButton = function (_a) {
    var icon = _a.icon, text = _a.text, active = _a.active, onClick = _a.onClick;
    return (react_1.default.createElement(styled_1.StyledIconButton, { className: (0, classnames_1.default)({
            active: active,
        }), onClick: onClick },
        icon,
        text && react_1.default.createElement("span", null, text)));
};
exports.IconButton = IconButton;
