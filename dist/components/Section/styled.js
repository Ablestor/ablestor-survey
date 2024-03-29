var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var StyledRoundSection = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);\n"], ["\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);\n"])));
export var StyledDashedSection = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px dashed ", ";\n"], ["\n  padding: 20px;\n  border-radius: 5px;\n  border: 1px dashed ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.lightGray;
});
export var StyledSurveyContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  width: 100%;\n  height: auto;\n"], ["\n  display: block;\n  width: 100%;\n  height: auto;\n"])));
export var StyledRow = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-top: 20px;\n"], ["\n  margin-top: 20px;\n"])));
export var StyledVerticalDivider = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  top: -2px;\n  width: 1px;\n  height: 36px;\n  margin: 0 12px;\n  line-height: 100%;\n  vertical-align: middle;\n  background-color: ", ";\n"], ["\n  display: inline-block;\n  position: relative;\n  top: -2px;\n  width: 1px;\n  height: 36px;\n  margin: 0 12px;\n  line-height: 100%;\n  vertical-align: middle;\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.lightGray;
});
export var StyledFlexContainer = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: ", ";\n  align-items: ", ";\n  justify-content: ", ";\n  > .flex-element {\n    &:not(:first-child) {\n      margin-left: 10px;\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: ", ";\n  align-items: ", ";\n  justify-content: ", ";\n  > .flex-element {\n    &:not(:first-child) {\n      margin-left: 10px;\n    }\n  }\n"])), function (props) { return props.flexDirection || 'row'; }, function (props) { return props.alignItems || 'center'; }, function (props) { return props.justifyContent || 'center'; });
export var StyledFlexElement = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (props) { return (props.width === 'flex' ? "flex: 1" : "width: " + props.width + "px"); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
