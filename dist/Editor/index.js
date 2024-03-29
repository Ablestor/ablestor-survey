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
import { useCallback, useState, useEffect, useMemo } from 'react';
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
import { ThemeProvider } from 'styled-components';
import { themeRef } from '../helpers/theme';
import { blockList } from '../constants/blocks';
var Editor = function (_a) {
    var submitButtonOptions = _a.submitButtonOptions, defaultValue = _a.defaultValue, onChange = _a.onChange, onSubmit = _a.onSubmit, _b = _a.inputShow, inputShow = _b === void 0 ? true : _b, whiteList = _a.whiteList, blackList = _a.blackList;
    var _c = useState((defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.title) || ''), surveyTitle = _c[0], setSurveyTitle = _c[1];
    var _d = useState((defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.description) || ''), surveyDescription = _d[0], setSurveyDescription = _d[1];
    var _e = useState((defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.content) || []), surveyContent = _e[0], setSurveyContent = _e[1];
    var _f = useMemo(function () {
        var isSub = blackList || whiteList ? (blackList ? true : false) : undefined;
        return [isSub, isSub !== undefined ? (isSub ? blackList : whiteList) : undefined];
    }, [blackList, whiteList]), isListSub = _f[0], list = _f[1];
    var extractSurveyResult = useCallback(function () { return ({
        title: surveyTitle,
        description: surveyDescription,
        content: surveyContent.filter(function (_a) {
            var type = _a.type;
            return type !== BlockTypes.BLANK;
        }),
    }); }, [surveyTitle, surveyDescription, surveyContent]);
    var _g = useState([
        {
            key: '',
            label: '',
            value: '',
        },
    ]), filterItem = _g[0], setFilterItem = _g[1];
    useEffect(function () {
        var filterItems = function () {
            return blockList.filter(function (_a) {
                var value = _a.value;
                var lowerValue = String(value).toLowerCase();
                var isBlank = lowerValue === 'blank';
                var isValueTypeNumber = typeof lowerValue === 'number';
                if (isValueTypeNumber)
                    return false;
                console.log(lowerValue);
                return isListSub
                    ? !(list === null || list === void 0 ? void 0 : list.includes(lowerValue)) || isBlank
                    : (list === null || list === void 0 ? void 0 : list.includes(lowerValue)) || isBlank;
            });
        };
        setFilterItem(typeof isListSub !== 'undefined' ? filterItems() : blockList);
    }, []);
    useEffect(function () {
        if (onChange) {
            onChange(extractSurveyResult());
        }
    }, [onChange, extractSurveyResult]);
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
    return (_jsx(ThemeProvider, __assign({ theme: __assign({}, themeRef.current) }, { children: _jsxs(SurveyContainer, __assign({ className: 'ablestor-survey' }, { children: [inputShow && (_jsxs(Row, { children: [_jsx(Input, { placeholder: '설문 제목', value: surveyTitle, onChange: function (_a) {
                                var value = _a.target.value;
                                return setSurveyTitle(value);
                            } }, void 0), _jsx(Input, { placeholder: '설문 설명', value: surveyDescription, onChange: function (_a) {
                                var value = _a.target.value;
                                return setSurveyDescription(value);
                            } }, void 0)] }, void 0)), _jsx(Row, { children: _jsx(DragDropContext, __assign({ onDragEnd: onDragEnd }, { children: _jsx(Droppable, __assign({ droppableId: 'droppable' }, { children: function (provided) { return (_jsxs("div", __assign({}, provided.droppableProps, { ref: provided.innerRef }, { children: [surveyContent.map(function (block, i) { return (_jsx(Draggable, __assign({ draggableId: String(i), index: i }, { children: function (provided) { return (_jsx("div", __assign({ ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps, { children: _jsx(BlockPresenter, __assign({ list: filterItem }, provided.draggableProps, provided.dragHandleProps, { block: block, onUpdateBlock: function (data) { return onUpdateBlock(i, data); }, onCopyBlock: function (data) { return onCopyBlock(i, data); }, onRemoveBlock: function () { return onRemoveBlock(i); } }), i) }), void 0)); } }), i)); }), provided.placeholder] }), void 0)); } }), void 0) }), void 0) }, void 0), _jsx(Row, { children: _jsxs(RoundDashedSection, __assign({ style: {
                            textAlign: 'center',
                            cursor: 'pointer',
                        }, onClick: addBlock }, { children: [_jsx(TiPlus, {}, void 0), _jsx(Text, { children: "\uC0C8\uB85C\uC6B4 \uD56D\uBAA9 \uCD94\uAC00" }, void 0)] }), void 0) }, void 0), (submitButtonOptions === null || submitButtonOptions === void 0 ? void 0 : submitButtonOptions.visible) && (_jsx(Row, { children: _jsx(Button, __assign({ onClick: function () { return onSubmit && onSubmit(extractSurveyResult()); } }, { children: (submitButtonOptions === null || submitButtonOptions === void 0 ? void 0 : submitButtonOptions.text) || '전송' }), void 0) }, void 0))] }), void 0) }), void 0));
};
export default Editor;
