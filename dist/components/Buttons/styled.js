"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledIconButton = exports.StyledButton = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var colors_1 = __importDefault(require("../../constants/colors"));
exports.StyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 36px;\n  padding: 0 5px;\n  border: none;\n  border-radius: 5px;\n  font-size: 0.9em;\n  outline: none;\n  transition: all 0.3s;\n  cursor: pointer;\n  &:hover {\n    color: #fff;\n    background-color: ", ";\n  }\n  &.active {\n    color: #fff;\n    background-color: ", ";\n  }\n"], ["\n  width: 100%;\n  height: 36px;\n  padding: 0 5px;\n  border: none;\n  border-radius: 5px;\n  font-size: 0.9em;\n  outline: none;\n  transition: all 0.3s;\n  cursor: pointer;\n  &:hover {\n    color: #fff;\n    background-color: ", ";\n  }\n  &.active {\n    color: #fff;\n    background-color: ", ";\n  }\n"])), colors_1.default.main, colors_1.default.main);
exports.StyledIconButton = (0, styled_components_1.default)(exports.StyledButton)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: auto;\n  line-height: 36px;\n  margin: 0 2px;\n  padding: 0 10px;\n  font-size: 18px;\n  justify-content: middle;\n  &:hover {\n    transform: scale(1.05);\n  }\n  svg {\n    position: relative;\n    top: 3px;\n  }\n  span {\n    margin-left: 3px;\n    font-size: 0.9rem;\n  }\n"], ["\n  width: auto;\n  line-height: 36px;\n  margin: 0 2px;\n  padding: 0 10px;\n  font-size: 18px;\n  justify-content: middle;\n  &:hover {\n    transform: scale(1.05);\n  }\n  svg {\n    position: relative;\n    top: 3px;\n  }\n  span {\n    margin-left: 3px;\n    font-size: 0.9rem;\n  }\n"])));
var templateObject_1, templateObject_2;
