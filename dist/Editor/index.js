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
import { useCallback, useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { TiPlus } from 'react-icons/ti';
import update from 'immutability-helper';
import { v4 as uniqid } from 'uuid';
import { BlockTypes } from '../@types/block';
import { RoundDashedSection, Row, SurveyContainer } from '../components/Section';
import { Input } from '../components/Inputs';
import { Button } from '../components/Buttons';
import { Text } from '../components/Texts';
import { BlockPresenter } from './Blocks';
var Editor = function (_a) {
    var submitButtonOptions = _a.submitButtonOptions, defaultValue = _a.defaultValue, onChange = _a.onChange, onSubmit = _a.onSubmit;
    var _b = useState((defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.title) || ''), surveyTitle = _b[0], setSurveyTitle = _b[1];
    var _c = useState((defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.description) || ''), surveyDescription = _c[0], setSurveyDescription = _c[1];
    var _d = useState((defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.content) || []), surveyContent = _d[0], setSurveyContent = _d[1];
    var extractSurveyResult = useCallback(function () { return ({
        title: surveyTitle,
        description: surveyDescription,
        content: surveyContent.filter(function (_a) {
            var type = _a.type;
            return type !== BlockTypes.BLANK;
        }),
    }); }, [surveyTitle, surveyDescription, surveyContent]);
    useEffect(function () {
        if (onChange) {
            onChange(extractSurveyResult());
        }
    }, [surveyTitle, surveyDescription, surveyContent]);
    var addBlock = useCallback(function () {
        var order = surveyContent.length + 1;
        setSurveyContent(update(surveyContent, {
            $push: [
                {
                    id: uniqid(),
                    type: BlockTypes.BLANK,
                    order: order,
                    required: false,
                },
            ],
        }));
    }, [surveyContent]);
    var onUpdateBlock = function (index, data) {
        var _a;
        setSurveyContent(update(surveyContent, (_a = {},
            _a[index] = {
                $set: data,
            },
            _a)));
    };
    var onCopyBlock = function (index, data) {
        setSurveyContent(update(surveyContent, {
            $splice: [[index, 0, data]],
        }));
    };
    var onRemoveBlock = function (index) {
        setSurveyContent(update(surveyContent, {
            $splice: [[index, 1]],
        }));
    };
    var onDragEnd = function (result) {
        if (!result.destination) {
            return;
        }
        reorderBlocks(result.source.index, result.destination.index);
    };
    var reorderBlocks = function (index, nextIndex) {
        var reorderSurveyContent = Array.from(surveyContent);
        var removed = reorderSurveyContent.splice(index, 1)[0];
        reorderSurveyContent.splice(nextIndex, 0, removed);
        setSurveyContent(reorderSurveyContent);
    };
    return (_jsxs(SurveyContainer, { children: [_jsxs(Row, { children: [_jsx(Input, { placeholder: '?????? ??????', value: surveyTitle, onChange: function (_a) {
                            var target = _a.target;
                            return setSurveyTitle(target.value);
                        } }, void 0), _jsx(Input, { placeholder: '?????? ??????', value: surveyDescription, onChange: function (_a) {
                            var target = _a.target;
                            return setSurveyDescription(target.value);
                        } }, void 0)] }, void 0), _jsx(Row, { children: _jsx(DragDropContext, __assign({ onDragEnd: onDragEnd }, { children: _jsx(Droppable, __assign({ droppableId: 'droppable' }, { children: function (provided) { return (_jsxs("div", __assign({}, provided.droppableProps, { ref: provided.innerRef }, { children: [surveyContent.map(function (block, i) { return (_jsx(Draggable, __assign({ draggableId: String(i), index: i }, { children: function (provided) { return (_jsx("div", __assign({ ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps, { children: _jsx(BlockPresenter, __assign({}, provided.draggableProps, provided.dragHandleProps, { block: block, onUpdateBlock: function (data) { return onUpdateBlock(i, data); }, onCopyBlock: function (data) { return onCopyBlock(i, data); }, onRemoveBlock: function () { return onRemoveBlock(i); } }), i) }), void 0)); } }), i)); }), provided.placeholder] }), void 0)); } }), void 0) }), void 0) }, void 0), _jsx(Row, { children: _jsxs(RoundDashedSection, __assign({ style: {
                        textAlign: 'center',
                        cursor: 'pointer',
                    }, onClick: addBlock }, { children: [_jsx(TiPlus, {}, void 0), _jsx(Text, { children: "\uC0C8\uB85C\uC6B4 \uD56D\uBAA9 \uCD94\uAC00" }, void 0)] }), void 0) }, void 0), (submitButtonOptions === null || submitButtonOptions === void 0 ? void 0 : submitButtonOptions.visible) && (_jsx(Row, { children: _jsx(Button, __assign({ onClick: function () { return onSubmit && onSubmit(extractSurveyResult()); } }, { children: (submitButtonOptions === null || submitButtonOptions === void 0 ? void 0 : submitButtonOptions.text) || '??????' }), void 0) }, void 0))] }, void 0));
};
export default Editor;
