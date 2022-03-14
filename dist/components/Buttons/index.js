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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classnames from 'classnames';
import { StyledButton, StyledIconButton } from './styled';
export var Button = function (props) { return _jsx(StyledButton, __assign({}, props), void 0); };
export var IconButton = function (_a) {
    var icon = _a.icon, text = _a.text, active = _a.active, onClick = _a.onClick;
    return (_jsxs(StyledIconButton, __assign({ className: classnames({
            active: active,
        }), onClick: onClick }, { children: [icon, text && _jsx("span", { children: text }, void 0)] }), void 0));
};
