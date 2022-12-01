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
import { useRef } from 'react';
export var defaultTheme = {
    main: '#87132f',
    black: '#333',
    gray: '#ccc',
    lightGray: '#efefef',
};
export var themeRef = { current: defaultTheme };
export function useTheme(theme) {
    themeRef = useRef(__assign(__assign({}, defaultTheme), theme));
}
