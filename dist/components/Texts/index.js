"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.Description = exports.Title = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Title = styled_components_1.default.h2(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 1.5em;\n"], ["\n  font-size: 1.5em;\n"])));
exports.Description = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 0.85em;\n  color: gray;\n"], ["\n  font-size: 0.85em;\n  color: gray;\n"])));
exports.Text = styled_components_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: 2px 0 4px;\n  font-size: 0.9em;\n  color: #333;\n"], ["\n  margin: 2px 0 4px;\n  font-size: 0.9em;\n  color: #333;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
