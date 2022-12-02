var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var StyledInput = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 36px;\n  padding: 0 10px;\n  margin: 5px 0;\n  border: 1px solid ", ";\n  border-radius: 5px;\n  font-size: 0.9em;\n  outline: none;\n  transition: all 0.3s;\n  &:focus,\n  &:active {\n    border-color: ", ";\n  }\n"], ["\n  width: 100%;\n  height: 36px;\n  padding: 0 10px;\n  margin: 5px 0;\n  border: 1px solid ", ";\n  border-radius: 5px;\n  font-size: 0.9em;\n  outline: none;\n  transition: all 0.3s;\n  &:focus,\n  &:active {\n    border-color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.gray;
}, function (_a) {
    var theme = _a.theme;
    return theme.main;
});
export var StyledTextarea = styled.textarea(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 100px;\n  padding: 10px;\n  margin: 5px 0;\n  border: 1px solid ", ";\n  border-radius: 5px;\n  font-size: 0.9em;\n  outline: none;\n  font-family: inherit;\n  transition: border 0.3s;\n  resize: vertical;\n  &:focus,\n  &:active {\n    border-color: ", ";\n  }\n"], ["\n  width: 100%;\n  height: 100px;\n  padding: 10px;\n  margin: 5px 0;\n  border: 1px solid ", ";\n  border-radius: 5px;\n  font-size: 0.9em;\n  outline: none;\n  font-family: inherit;\n  transition: border 0.3s;\n  resize: vertical;\n  &:focus,\n  &:active {\n    border-color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.gray;
}, function (_a) {
    var theme = _a.theme;
    return theme.main;
});
export var StyledSelect = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: 36px;\n  padding: 0 10px;\n  text-align: left;\n  border: 1px solid ", ";\n  border-radius: 5px;\n  font-size: 0.9em;\n  outline: none;\n  transition: all 0.3s;\n  cursor: default;\n  &:focus,\n  &:active {\n    ", ";\n  }\n  .select-current-value {\n    height: 36px;\n    vertical-align: middle;\n    display: flex;\n    align-items: center;\n    > p {\n      flex: 1;\n      margin: 0;\n    }\n    .select-icon {\n      width: 14px;\n    }\n  }\n  .select-options-container {\n    position: absolute;\n    width: 100%;\n    max-height: 300px;\n    top: 0px;\n    left: -0;\n    overflow: auto;\n    background-color: #fff;\n    border-radius: inherit;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4);\n    z-index: 9999;\n    .select-options {\n      padding: 0 10px;\n      height: 36px;\n      line-height: 36px;\n      vertical-align: middle;\n      &.selected {\n        color: ", ";\n        background-color: ", ";\n      }\n      &:hover {\n        color: #fff;\n        background-color: ", ";\n      }\n    }\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: 36px;\n  padding: 0 10px;\n  text-align: left;\n  border: 1px solid ", ";\n  border-radius: 5px;\n  font-size: 0.9em;\n  outline: none;\n  transition: all 0.3s;\n  cursor: default;\n  &:focus,\n  &:active {\n    ", ";\n  }\n  .select-current-value {\n    height: 36px;\n    vertical-align: middle;\n    display: flex;\n    align-items: center;\n    > p {\n      flex: 1;\n      margin: 0;\n    }\n    .select-icon {\n      width: 14px;\n    }\n  }\n  .select-options-container {\n    position: absolute;\n    width: 100%;\n    max-height: 300px;\n    top: 0px;\n    left: -0;\n    overflow: auto;\n    background-color: #fff;\n    border-radius: inherit;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4);\n    z-index: 9999;\n    .select-options {\n      padding: 0 10px;\n      height: 36px;\n      line-height: 36px;\n      vertical-align: middle;\n      &.selected {\n        color: ", ";\n        background-color: ", ";\n      }\n      &:hover {\n        color: #fff;\n        background-color: ", ";\n      }\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.gray;
}, function (_a) {
    var theme = _a.theme;
    return theme.main;
}, function (_a) {
    var theme = _a.theme;
    return theme.black;
}, function (_a) {
    var theme = _a.theme;
    return theme.lightGray;
}, function (_a) {
    var theme = _a.theme;
    return theme.main;
});
export var StyledCheckBox = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  margin: 5px 0;\n  border-radius: ", ";\n  border: 1px solid ", ";\n  transition: all 0.3s;\n  cursor: pointer;\n  &:hover {\n    background-color: ", ";\n  }\n  &.active::after {\n    position: absolute;\n    content: '';\n    display: inline-block;\n    width: 14px;\n    height: 14px;\n    top: 4px;\n    left: 4px;\n    border-radius: ", ";\n    background-color: ", ";\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  margin: 5px 0;\n  border-radius: ", ";\n  border: 1px solid ", ";\n  transition: all 0.3s;\n  cursor: pointer;\n  &:hover {\n    background-color: ", ";\n  }\n  &.active::after {\n    position: absolute;\n    content: '';\n    display: inline-block;\n    width: 14px;\n    height: 14px;\n    top: 4px;\n    left: 4px;\n    border-radius: ", ";\n    background-color: ", ";\n  }\n"])), function (props) { return (props.shape === 'circle' ? '50%' : '5px'); }, function (_a) {
    var theme = _a.theme;
    return theme.gray;
}, function (_a) {
    var theme = _a.theme;
    return theme.lightGray;
}, function (props) { return (props.shape === 'circle' ? '50%' : '3px'); }, function (_a) {
    var theme = _a.theme;
    return theme.main;
});
export var StyledSelectorThumb = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: ", ";\n  cursor: grab;\n"], ["\n  position: relative;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: ", ";\n  cursor: grab;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.main;
});
export var StyledSelectorValueLabel = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  width: 30px;\n  top: 30px;\n  left: -5px;\n  text-align: center;\n  font-weight: 0.8rem;\n  border-radius: 3px;\n  background-color: rgba(0, 0, 0, 0.6);\n  > p {\n    margin-bottom: 2px;\n    color: #fff;\n  }\n  &:after {\n    display: inline-block;\n    position: absolute;\n    content: '';\n    top: -5px;\n    left: 10px;\n    width: 0;\n    height: 0;\n    border-bottom: 5px solid rgba(0, 0, 0, 0.6);\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    background-color: transparent;\n  }\n"], ["\n  position: absolute;\n  width: 30px;\n  top: 30px;\n  left: -5px;\n  text-align: center;\n  font-weight: 0.8rem;\n  border-radius: 3px;\n  background-color: rgba(0, 0, 0, 0.6);\n  > p {\n    margin-bottom: 2px;\n    color: #fff;\n  }\n  &:after {\n    display: inline-block;\n    position: absolute;\n    content: '';\n    top: -5px;\n    left: 10px;\n    width: 0;\n    height: 0;\n    border-bottom: 5px solid rgba(0, 0, 0, 0.6);\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    background-color: transparent;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
