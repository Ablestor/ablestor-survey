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
import { BlockTypes } from '../../@types/block';
import { BlockButtonSection, BlockContainer } from './styled';
import { Input, Select, OptionEditor } from '../../components/Inputs';
import { IconButton } from '../../components/Buttons';
import { Text } from '../../components/Texts';
import { FlexContainer, FlexElement, Row, VerticalDivider } from '../../components/Section';
import { createBlock, getRange } from '../../helpers/generator';
import { getNameFromBlockType } from '../../helpers/converter';
var startAt = 2;
var minRange = getRange(startAt).map(function (i) { return ({
    label: String(i),
    value: i,
}); });
var maxRange = getRange(9).map(function (i) { return ({
    label: String(startAt + i),
    value: startAt + i,
}); });
export var BlockPresenter = function (_a) {
    var block = _a.block, onUpdateBlock = _a.onUpdateBlock, onCopyBlock = _a.onCopyBlock, onRemoveBlock = _a.onRemoveBlock, list = _a.list;
    var isTypedBlock = block.type !== BlockTypes.BLANK;
    var _b = useState(block.title), title = _b[0], setTitle = _b[1];
    var _c = useState(block.description), description = _c[0], setDescription = _c[1];
    return (_jsxs(BlockContainer, __assign({ className: classnames({
            required: block.required,
        }) }, { children: [_jsxs(FlexContainer, { children: [_jsx(FlexElement, __assign({ width: 'flex' }, { children: _jsx(Text, __assign({ style: { fontWeight: 'bold' } }, { children: isTypedBlock
                                ? getNameFromBlockType(block.type.toLowerCase())
                                : '설문 유형을 선택해주세요.' }), void 0) }), void 0), _jsx(FlexElement, __assign({ width: 220 }, { children: _jsx(Select, { items: list, selectedIndex: list.findIndex(function (b) { return typeof b.value === 'string' && b.value.toLowerCase() === block.type; }), onChange: function (value) {
                                var newBlock = createBlock(value.toLowerCase(), block.order);
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
                block.type === BlockTypes.DROPDOWN) && (_jsx(Row, { children: _jsx(OptionEditor, { options: block.format.options, onChange: function (options) { return onUpdateBlock(__assign(__assign({}, block), { format: __assign(__assign({}, block.format), { options: options }) })); } }, void 0) }, void 0)), block.type === BlockTypes.SWITCH && (_jsx(Row, { children: _jsx(Input, { defaultValue: block.format.options[0], placeholder: '스위치 타이틀', onChange: function (_a) {
                        var target = _a.target;
                        return onUpdateBlock(__assign(__assign({}, block), { format: { options: [target.value] } }));
                    } }, void 0) }, void 0)), block.type === BlockTypes.CHECK_BOX && (_jsx(Row, { children: _jsx(Input, { defaultValue: block.format.options[0], placeholder: '체크박스 타이틀', onChange: function (_a) {
                        var target = _a.target;
                        return onUpdateBlock(__assign(__assign({}, block), { format: { options: [target.value] } }));
                    } }, void 0) }, void 0)), block.type === BlockTypes.RANGE && (_jsxs(_Fragment, { children: [_jsx(Row, { children: _jsxs(FlexContainer, { children: [_jsx(FlexElement, __assign({ width: 60 }, { children: _jsx(Text, { children: "\uCD5C\uC18C \uAC12" }, void 0) }), void 0), _jsx(FlexElement, __assign({ width: 'flex' }, { children: _jsx(Select, { items: minRange, selectedIndex: minRange.findIndex(function (r) { return r.value === block.format.min; }), onChange: function (value) {
                                            return onUpdateBlock(__assign(__assign({}, block), { format: __assign(__assign({}, block.format), { min: value }) }));
                                        } }, void 0) }), void 0), _jsx(FlexElement, __assign({ width: 60 }, { children: _jsx(Text, { children: "\uCD5C\uB300 \uAC12" }, void 0) }), void 0), _jsx(FlexElement, __assign({ width: 'flex' }, { children: _jsx(Select, { items: maxRange, selectedIndex: maxRange.findIndex(function (r) { return r.value === block.format.max; }), onChange: function (value) {
                                            return onUpdateBlock(__assign(__assign({}, block), { format: __assign(__assign({}, block.format), { max: value }) }));
                                        } }, void 0) }), void 0)] }, void 0) }, void 0), _jsxs(Row, { children: [_jsxs(FlexContainer, { children: [_jsx(FlexElement, __assign({ width: 120 }, { children: _jsx(Text, { children: "\uCD5C\uC18C \uAC12 \uD0C0\uC774\uD2C0" }, void 0) }), void 0), _jsx(FlexElement, __assign({ width: 'flex' }, { children: _jsx(Input, { defaultValue: block.format.minTitle, placeholder: 'ex) 부족함', onChange: function (_a) {
                                                var target = _a.target;
                                                return onUpdateBlock(__assign(__assign({}, block), { format: __assign(__assign({}, block.format), { minTitle: target.value }) }));
                                            } }, void 0) }), void 0)] }, void 0), _jsxs(FlexContainer, { children: [_jsx(FlexElement, __assign({ width: 120 }, { children: _jsx(Text, { children: "\uCD5C\uB313 \uAC12 \uD0C0\uC774\uD2C0" }, void 0) }), void 0), _jsx(FlexElement, __assign({ width: 'flex' }, { children: _jsx(Input, { defaultValue: block.format.maxTitle, placeholder: 'ex) 만족함', onChange: function (_a) {
                                                var target = _a.target;
                                                return onUpdateBlock(__assign(__assign({}, block), { format: __assign(__assign({}, block.format), { maxTitle: target.value }) }));
                                            } }, void 0) }), void 0)] }, void 0)] }, void 0)] }, void 0)), _jsxs(BlockButtonSection, { children: [_jsx(IconButton, { icon: block.required ? _jsx(TiTick, {}, void 0) : _jsx(TiTickOutline, {}, void 0), text: block.required ? '필수 입력' : '선택 입력', active: block.required, onClick: function () { return onUpdateBlock(__assign(__assign({}, block), { required: !block.required })); } }, void 0), _jsx(IconButton, { icon: _jsx(TiTabsOutline, {}, void 0), onClick: function () { return onCopyBlock(block); } }, void 0), _jsx(VerticalDivider, {}, void 0), _jsx(IconButton, { icon: _jsx(TiTrash, {}, void 0), onClick: onRemoveBlock }, void 0)] }, void 0)] }), void 0));
};
