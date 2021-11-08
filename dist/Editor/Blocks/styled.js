"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockButtonSection = exports.BlockContainer = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var colors_1 = __importDefault(require("../../constants/colors"));
var createAnimation = (0, styled_components_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    background-color: ", "\n  }\n  to {\n    background-color: #fff;\n  }\n"], ["\n  from {\n    background-color: ", "\n  }\n  to {\n    background-color: #fff;\n  }\n"])), colors_1.default.lightGray);
exports.BlockContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 20px;\n  margin-bottom: 20px;\n  border: 1px solid ", ";\n  border-radius: 5px;\n  background-color: #fff;\n  animation: ", " 1s;\n"], ["\n  padding: 20px;\n  margin-bottom: 20px;\n  border: 1px solid ", ";\n  border-radius: 5px;\n  background-color: #fff;\n  animation: ", " 1s;\n"])), colors_1.default.lightGray, createAnimation);
exports.BlockButtonSection = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-align: right;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid ", ";\n"], ["\n  text-align: right;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid ", ";\n"])), colors_1.default.lightGray);
var templateObject_1, templateObject_2, templateObject_3;
