var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { keyframes } from 'styled-components';
import { defaultTheme } from '../../helpers/theme';
var createAnimation = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    background-color: ", "\n  }\n  to {\n    background-color: #fff;\n  }\n"], ["\n  from {\n    background-color: ", "\n  }\n  to {\n    background-color: #fff;\n  }\n"])), defaultTheme.lightGray);
export var BlockContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 20px;\n  margin-bottom: 20px;\n  border: 1px solid ", ";\n  border-radius: 5px;\n  background-color: #fff;\n  animation: ", " 1s;\n"], ["\n  padding: 20px;\n  margin-bottom: 20px;\n  border: 1px solid ", ";\n  border-radius: 5px;\n  background-color: #fff;\n  animation: ", " 1s;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.lightGray;
}, createAnimation);
export var BlockButtonSection = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-align: right;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid ", ";\n  display: flex;\n  justify-content: flex-end;\n"], ["\n  text-align: right;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid ", ";\n  display: flex;\n  justify-content: flex-end;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.lightGray;
});
var templateObject_1, templateObject_2, templateObject_3;
