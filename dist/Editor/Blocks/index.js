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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { TiTrash, TiTabsOutline, TiTick, TiTickOutline } from 'react-icons/ti';
import classnames from 'classnames';
import { v4 as uniqid } from 'uuid';
import { BlockTypes } from '../../@types/block';
import { BlockButtonSection, BlockContainer } from './styled';
import { Input, Select, OptionEditor, Switch } from '../../components/Inputs';
import { IconButton } from '../../components/Buttons';
import { Text } from '../../components/Texts';
import { FlexContainer, FlexElement, Row, VerticalDivider } from '../../components/Section';
import { createBlock, getRange } from '../../helpers/generator';
import { getNameFromBlockType } from '../../helpers/converter';
import { blockList } from '../../constants/blocks';
var startAt = 2;
var minRange = getRange(startAt).map(function (i) { return ({
    key: uniqid(),
    label: String(i),
    value: i,
}); });
var maxRange = getRange(9).map(function (i) { return ({
    key: uniqid(),
    label: String(startAt + i),
    value: startAt + i,
}); });
export var BlockPresenter = function (_a) {
    var block = _a.block, onUpdateBlock = _a.onUpdateBlock, onCopyBlock = _a.onCopyBlock, onRemoveBlock = _a.onRemoveBlock;
    var isTypedBlock = block.type !== BlockTypes.BLANK;
    var _b = useState(block.title), title = _b[0], setTitle = _b[1];
    var _c = useState(block.description), description = _c[0], setDescription = _c[1];
    return (_jsxs(BlockContainer, __assign({ className: classnames({
            required: block.required,
        }) }, { children: [_jsxs(FlexContainer, { children: [_jsx(FlexElement, __assign({ width: 'flex' }, { children: _jsx(Text, __assign({ style: { fontWeight: 'bold' } }, { children: isTypedBlock
                                ? getNameFromBlockType(block.type.toLowerCase())
                                : '설문 유형을 선택해주세요.' }), void 0) }), void 0), _jsx(FlexElement, __assign({ width: 220 }, { children: _jsx(Select, { items: blockList, selectedIndex: blockList.findIndex(function (b) { return b.value.toLowerCase() === block.type; }), onChange: function (_a) {
                                var value = _a.value;
                                var newBlock = createBlock(uniqid(), value.toLowerCase(), block.order);
                                onUpdateBlock(__assign(__assign({}, newBlock), { title: title, description: description }));
                            } }, void 0) }), void 0)] }, void 0), isTypedBlock && (_jsxs(_Fragment, { children: [_jsx(Input, { placeholder: '제목을 입력해주세요.', value: title, onChange: function (_a) {
                            var target = _a.target;
                            var title = target.value;
                            setTitle(title);
                            onUpdateBlock(__assign(__assign({}, block), { title: title }));
                        } }, void 0), _jsx(Input, { placeholder: '설명을 입력해주세요.', value: description, onChange: function (_a) {
                            var target = _a.target;
                            var description = target.value;
                            setDescription(description);
                            onUpdateBlock(__assign(__assign({}, block), { description: description }));
                        } }, void 0)] }, void 0)), (block.type === BlockTypes.SINGLE_SELECT ||
                block.type === BlockTypes.MULTI_SELECT ||
                block.type === BlockTypes.DROPDOWN) && (_jsx(Row, { children: _jsx(OptionEditor, { items: block.question, onChange: function (question) { return onUpdateBlock(__assign(__assign({}, block), { question: question })); } }, void 0) }, void 0)), block.type === BlockTypes.SWITCH && (_jsx(Row, { children: _jsx(Input, { defaultValue: block.switchTitle, placeholder: '스위치 타이틀', onChange: function (_a) {
                        var target = _a.target;
                        return onUpdateBlock(__assign(__assign({}, block), { switchTitle: target.value }));
                    } }, void 0) }, void 0)), block.type === BlockTypes.CHECK_BOX && (_jsx(Row, { children: _jsx(Input, { defaultValue: block.checkboxTitle, placeholder: '체크박스 타이틀', onChange: function (_a) {
                        var target = _a.target;
                        return onUpdateBlock(__assign(__assign({}, block), { checkboxTitle: target.value }));
                    } }, void 0) }, void 0)), block.type === BlockTypes.FILE_UPLOAD && (_jsx(Row, { children: _jsxs(FlexContainer, { children: [_jsx(FlexElement, __assign({ width: 'flex' }, { children: _jsx(Text, { children: "\uC5EC\uB7EC \uD30C\uC77C \uC5C5\uB85C\uB4DC \uD5C8\uC6A9" }, void 0) }), void 0), _jsx(FlexElement, __assign({ width: 40 }, { children: _jsx(Switch, { value: block.multiple, onChange: function (multiple) { return onUpdateBlock(__assign(__assign({}, block), { multiple: multiple })); } }, void 0) }), void 0)] }, void 0) }, void 0)), block.type === BlockTypes.RANGE && (_jsxs(_Fragment, { children: [_jsx(Row, { children: _jsxs(FlexContainer, { children: [_jsx(FlexElement, __assign({ width: 60 }, { children: _jsx(Text, { children: "\uCD5C\uC18C \uAC12" }, void 0) }), void 0), _jsx(FlexElement, __assign({ width: 'flex' }, { children: _jsx(Select, { items: minRange, selectedIndex: minRange.findIndex(function (r) { return r.value === block.min; }), onChange: function (_a) {
                                            var value = _a.value;
                                            return onUpdateBlock(__assign(__assign({}, block), { min: value }));
                                        } }, void 0) }), void 0), _jsx(FlexElement, __assign({ width: 60 }, { children: _jsx(Text, { children: "\uCD5C\uB300 \uAC12" }, void 0) }), void 0), _jsx(FlexElement, __assign({ width: 'flex' }, { children: _jsx(Select, { items: maxRange, selectedIndex: maxRange.findIndex(function (r) { return r.value === block.max; }), onChange: function (_a) {
                                            var value = _a.value;
                                            return onUpdateBlock(__assign(__assign({}, block), { max: value }));
                                        } }, void 0) }), void 0)] }, void 0) }, void 0), _jsxs(Row, { children: [_jsxs(FlexContainer, { children: [_jsx(FlexElement, __assign({ width: 120 }, { children: _jsx(Text, { children: "\uCD5C\uC18C \uAC12 \uD0C0\uC774\uD2C0" }, void 0) }), void 0), _jsx(FlexElement, __assign({ width: 'flex' }, { children: _jsx(Input, { defaultValue: block.minTitle, placeholder: 'ex) 부족함', onChange: function (_a) {
                                                var target = _a.target;
                                                return onUpdateBlock(__assign(__assign({}, block), { minTitle: target.value }));
                                            } }, void 0) }), void 0)] }, void 0), _jsxs(FlexContainer, { children: [_jsx(FlexElement, __assign({ width: 120 }, { children: _jsx(Text, { children: "\uCD5C\uB313 \uAC12 \uD0C0\uC774\uD2C0" }, void 0) }), void 0), _jsx(FlexElement, __assign({ width: 'flex' }, { children: _jsx(Input, { defaultValue: block.maxTitle, placeholder: 'ex) 만족함', onChange: function (_a) {
                                                var target = _a.target;
                                                return onUpdateBlock(__assign(__assign({}, block), { maxTitle: target.value }));
                                            } }, void 0) }), void 0)] }, void 0)] }, void 0)] }, void 0)), _jsxs(BlockButtonSection, { children: [_jsx(IconButton, { icon: block.required ? _jsx(TiTick, {}, void 0) : _jsx(TiTickOutline, {}, void 0), text: block.required ? '필수 입력' : '선택 입력', active: block.required, onClick: function () { return onUpdateBlock(__assign(__assign({}, block), { required: !block.required })); } }, void 0), _jsx(IconButton, { icon: _jsx(TiTabsOutline, {}, void 0), onClick: function () { return onCopyBlock(block); } }, void 0), _jsx(VerticalDivider, {}, void 0), _jsx(IconButton, { icon: _jsx(TiTrash, {}, void 0), onClick: onRemoveBlock }, void 0)] }, void 0)] }), void 0));
};
