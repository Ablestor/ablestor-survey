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
import { jsx as _jsx } from "react/jsx-runtime";
import { StyledRoundSection, StyledDashedSection, StyledSurveyContainer, StyledRow, StyledVerticalDivider, StyledFlexContainer, StyledFlexElement, } from './styled';
export var RoundSection = function (props) { return (_jsx(StyledRoundSection, __assign({}, props), void 0)); };
export var RoundDashedSection = function (props) { return (_jsx(StyledDashedSection, __assign({}, props), void 0)); };
export var SurveyContainer = function (props) { return (_jsx(StyledSurveyContainer, __assign({}, props), void 0)); };
export var Row = function (props) { return (_jsx(StyledRow, __assign({}, props), void 0)); };
export var VerticalDivider = function (props) { return (_jsx(StyledVerticalDivider, __assign({}, props), void 0)); };
export var FlexContainer = function (props) { return (_jsx(StyledFlexContainer, __assign({}, props), void 0)); };
export var FlexElement = function (props) { return (_jsx(StyledFlexElement, __assign({ className: 'flex-element' }, props), void 0)); };
