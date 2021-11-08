"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockButtonSection = exports.BlockContainer = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var colors_1 = __importDefault(require("../../constants/colors"));
exports.BlockContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 20px;\n  margin-bottom: 20px;\n  border: 1px solid ", ";\n  border-radius: 5px;\n  background-color: #fff;\n"], ["\n  padding: 20px;\n  margin-bottom: 20px;\n  border: 1px solid ", ";\n  border-radius: 5px;\n  background-color: #fff;\n"])), colors_1.default.lightGray);
exports.BlockButtonSection = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  text-align: right;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid ", ";\n"], ["\n  text-align: right;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid ", ";\n"])), colors_1.default.lightGray);
var templateObject_1, templateObject_2;
