var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 36px;\n  padding: 0 5px;\n  border: none;\n  border-radius: 5px;\n  font-size: 0.9em;\n  outline: none;\n  transition: all 0.3s;\n  cursor: pointer;\n  &:hover {\n    color: #fff;\n    background-color: ", ";\n  }\n  &.active {\n    color: #fff;\n    background-color: ", ";\n  }\n"], ["\n  width: 100%;\n  height: 36px;\n  padding: 0 5px;\n  border: none;\n  border-radius: 5px;\n  font-size: 0.9em;\n  outline: none;\n  transition: all 0.3s;\n  cursor: pointer;\n  &:hover {\n    color: #fff;\n    background-color: ", ";\n  }\n  &.active {\n    color: #fff;\n    background-color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.main;
}, function (_a) {
    var theme = _a.theme;
    return theme.main;
});
export var StyledIconButton = styled(StyledButton)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: auto;\n  line-height: 36px;\n  margin: 0 2px;\n  padding: 0 10px;\n  font-size: 18px;\n  justify-content: middle;\n  &:hover {\n    transform: scale(1.05);\n  }\n  svg {\n    position: relative;\n    top: 3px;\n  }\n  span {\n    margin-left: 3px;\n    font-size: 0.9rem;\n  }\n"], ["\n  width: auto;\n  line-height: 36px;\n  margin: 0 2px;\n  padding: 0 10px;\n  font-size: 18px;\n  justify-content: middle;\n  &:hover {\n    transform: scale(1.05);\n  }\n  svg {\n    position: relative;\n    top: 3px;\n  }\n  span {\n    margin-left: 3px;\n    font-size: 0.9rem;\n  }\n"])));
var templateObject_1, templateObject_2;
