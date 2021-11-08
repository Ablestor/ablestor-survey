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
exports.FlexElement = exports.FlexContainer = exports.VerticalDivider = exports.Row = exports.SurveyContainer = exports.RoundDashedSection = exports.RoundSection = void 0;
var react_1 = __importDefault(require("react"));
var styled_1 = require("./styled");
var RoundSection = function (props) { return (react_1.default.createElement(styled_1.StyledRoundSection, __assign({}, props))); };
exports.RoundSection = RoundSection;
var RoundDashedSection = function (props) { return (react_1.default.createElement(styled_1.StyledDashedSection, __assign({}, props))); };
exports.RoundDashedSection = RoundDashedSection;
var SurveyContainer = function (props) { return (react_1.default.createElement(styled_1.StyledSurveyContainer, __assign({}, props))); };
exports.SurveyContainer = SurveyContainer;
var Row = function (props) { return (react_1.default.createElement(styled_1.StyledRow, __assign({}, props))); };
exports.Row = Row;
var VerticalDivider = function (props) { return (react_1.default.createElement(styled_1.StyledVerticalDivider, __assign({}, props))); };
exports.VerticalDivider = VerticalDivider;
var FlexContainer = function (props) { return (react_1.default.createElement(styled_1.StyledFlexContainer, __assign({}, props))); };
exports.FlexContainer = FlexContainer;
var FlexElement = function (props) { return (react_1.default.createElement(styled_1.StyledFlexElement, __assign({ className: 'flex-element' }, props))); };
exports.FlexElement = FlexElement;
