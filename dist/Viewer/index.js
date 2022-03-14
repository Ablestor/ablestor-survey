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
import update from 'immutability-helper';
import { Row, SurveyContainer } from '../components/Section';
import { Title, Description } from '../components/Texts';
import { BlockPresenter } from './Blocks';
import { BlockTypes } from '../@types/block';
import { Button } from '../components/Buttons';
import 'filepond/dist/filepond.min.css';
var Viewer = function (_a) {
    var survey = _a.survey, submitButtonOptions = _a.submitButtonOptions, onSubmit = _a.onSubmit;
    var _b = useState(survey), surveyContent = _b[0], setSurveyContent = _b[1];
    useEffect(function () {
        setSurveyContent(survey);
    }, [survey]);
    var onUpdateBlock = function (index, data) {
        var _a;
        setSurveyContent(update(surveyContent, {
            content: (_a = {},
                _a[index] = {
                    $set: data,
                },
                _a),
        }));
    };
    var title = surveyContent.title, description = surveyContent.description, content = surveyContent.content;
    return (_jsxs(SurveyContainer, { children: [_jsx(Row, { children: _jsx(Title, { children: title }, void 0) }, void 0), _jsx(Row, { children: _jsx(Description, { children: description }, void 0) }, void 0), content.map(function (block, i) { return (_jsx(Row, { children: _jsx(BlockPresenter, { block: block, onUpdateBlock: function (data) { return onUpdateBlock(i, data); } }, void 0) }, i)); }), (submitButtonOptions === null || submitButtonOptions === void 0 ? void 0 : submitButtonOptions.visible) && (_jsx(Row, { children: _jsx(Button, __assign({ onClick: function () {
                        var invalidContents = content.filter(function (block) {
                            if (block.type === BlockTypes.BLANK) {
                                return false;
                            }
                            return (block.required &&
                                'answer' in block &&
                                (block.answer === null ||
                                    block.answer === undefined ||
                                    block.answer === '' ||
                                    (block.answer instanceof Array && block.answer.length === 0)));
                        });
                        if (invalidContents.length) {
                            console.log('입력하지 않은 항목이 있습니다.');
                            console.log(invalidContents);
                            return;
                        }
                        onSubmit && onSubmit(surveyContent);
                    } }, { children: (submitButtonOptions === null || submitButtonOptions === void 0 ? void 0 : submitButtonOptions.text) || '확인' }), void 0) }, void 0))] }, void 0));
};
export default Viewer;
