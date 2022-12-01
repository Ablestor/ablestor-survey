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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Row, SurveyContainer } from '../components/Section';
import { Title, Description } from '../components/Texts';
import { BlockPresenter } from './Blocks';
import { Button } from '../components/Buttons';
import 'filepond/dist/filepond.min.css';
import { ThemeProvider } from 'styled-components';
import { themeRef } from '..';
var Viewer = function (_a) {
    var survey = _a.survey, submitButtonOptions = _a.submitButtonOptions;
    var _b = useState(survey), surveyContent = _b[0], setSurveyContent = _b[1];
    useEffect(function () {
        setSurveyContent(survey);
    }, [survey]);
    var title = surveyContent.title, description = surveyContent.description, questions = surveyContent.questions;
    return (_jsx(ThemeProvider, __assign({ theme: __assign({}, themeRef.current) }, { children: _jsxs(SurveyContainer, { children: [_jsx(Row, { children: _jsx(Title, { children: title }, void 0) }, void 0), _jsx(Row, { children: _jsx(Description, { children: description }, void 0) }, void 0), questions.map(function (block, i) { return (_jsx(Row, { children: _jsx(BlockPresenter, { block: block }, void 0) }, i)); }), (submitButtonOptions === null || submitButtonOptions === void 0 ? void 0 : submitButtonOptions.visible) && (_jsx(Row, { children: _jsx(Button, { children: (submitButtonOptions === null || submitButtonOptions === void 0 ? void 0 : submitButtonOptions.text) || '확인' }, void 0) }, void 0))] }, void 0) }), void 0));
};
export default Viewer;
