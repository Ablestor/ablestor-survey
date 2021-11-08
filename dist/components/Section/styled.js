"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledFlexElement = exports.StyledFlexContainer = exports.StyledVerticalDivider = exports.StyledRow = exports.StyledSurveyContainer = exports.StyledDashedSection = exports.StyledRoundSection = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var colors_1 = __importDefault(require("../../constants/colors"));
exports.StyledRoundSection = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);\n"], ["\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);\n"])));
exports.StyledDashedSection = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px dashed ", ";\n"], ["\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px dashed ", ";\n"])), colors_1.default.lightGray);
exports.StyledSurveyContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  width: 100%;\n  height: auto;\n"], ["\n  display: block;\n  width: 100%;\n  height: auto;\n"])));
exports.StyledRow = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-top: 20px;\n"], ["\n  margin-top: 20px;\n"])));
exports.StyledVerticalDivider = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  top: -2px;\n  width: 1px;\n  height: 36px;\n  margin: 0 12px;\n  line-height: 100%;\n  vertical-align: middle;\n  background-color: ", ";\n"], ["\n  display: inline-block;\n  position: relative;\n  top: -2px;\n  width: 1px;\n  height: 36px;\n  margin: 0 12px;\n  line-height: 100%;\n  vertical-align: middle;\n  background-color: ", ";\n"])), colors_1.default.lightGray);
exports.StyledFlexContainer = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: ", ";\n  align-items: ", ";\n  justify-content: ", ";\n  > .flex-element {\n    &:not(:first-child) {\n      margin-left: 10px;\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: ", ";\n  align-items: ", ";\n  justify-content: ", ";\n  > .flex-element {\n    &:not(:first-child) {\n      margin-left: 10px;\n    }\n  }\n"])), function (props) { return props.flexDirection || 'row'; }, function (props) { return props.alignItems || 'center'; }, function (props) { return props.justifyContent || 'center'; });
exports.StyledFlexElement = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (props) { return (props.width === 'flex' ? "flex: 1" : "width: " + props.width + "px"); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
