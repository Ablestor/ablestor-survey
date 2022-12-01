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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect, } from 'react';
import update from 'immutability-helper';
import classnames from 'classnames';
import { v4 as uniqid } from 'uuid';
import { TiArrowSortedDown, TiTimes } from 'react-icons/ti';
import { FilePond } from 'react-filepond';
import { Range } from 'react-range';
import Colors from '../../constants/colors';
import { useClickAway } from '../../hooks';
import { IconButton } from '../Buttons';
import { RoundSection, FlexContainer, FlexElement } from '../Section';
import { Text } from '../Texts';
import { StyledInput, StyledTextarea, StyledSelect, StyledSwitch, StyledCheckBox, StyledSelectorValueLabel, StyledSelectorThumb, } from './styled';
export var Input = function (props) { return _jsx(StyledInput, __assign({}, props), void 0); };
export var Textarea = function (props) { return _jsx(StyledTextarea, __assign({}, props), void 0); };
export var Select = function (_a) {
    var _b;
    var items = _a.items, selectedIndex = _a.selectedIndex, onChange = _a.onChange;
    var selectRef = useRef(null);
    var _c = useState(false), listVisible = _c[0], setListVisible = _c[1];
    var _d = useState(selectedIndex || 0), selectIndex = _d[0], setSelectIndex = _d[1];
    var _e = useState(items[selectedIndex || 0]), selectedItem = _e[0], setSelectedItem = _e[1];
    useClickAway(selectRef, function () { return setListVisible(false); });
    useEffect(function () {
        setSelectIndex(selectedIndex || 0);
    }, [selectedIndex]);
    useEffect(function () {
        setSelectedItem(items[selectIndex]);
    }, [selectIndex]);
    return (_jsxs(StyledSelect, __assign({ ref: selectRef, onClick: function () { return setListVisible(true); } }, { children: [_jsxs("div", __assign({ className: 'select-current-value' }, { children: [_jsx(Text, { children: (_b = selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.label) !== null && _b !== void 0 ? _b : '목록에서 선택해주세요.' }, void 0), _jsx("div", __assign({ className: 'select-icon' }, { children: _jsx(TiArrowSortedDown, {}, void 0) }), void 0)] }), void 0), listVisible && (_jsx("div", __assign({ className: 'select-options-container' }, { children: items.map(function (item, index) { return (_jsx("div", __assign({ className: classnames({
                        'select-options': true,
                        selected: index === selectIndex,
                    }), onClick: function (e) {
                        e.stopPropagation();
                        setSelectIndex(index);
                        onChange && onChange(item, index);
                        setListVisible(false);
                    } }, { children: item.label }), item.key)); }) }), void 0))] }), void 0));
};
export var OptionEditor = function (_a) {
    var items = _a.items, onChange = _a.onChange;
    var appendItem = function (value) {
        return onChange && onChange(__spreadArray(__spreadArray([], items, true), [{ key: uniqid(), label: value, value: value }], false));
    };
    var removeItem = function (index) {
        return onChange && onChange(update(items, { $splice: [[index, 1]] }));
    };
    return (_jsxs(RoundSection, { children: [_jsx(Text, __assign({ style: { fontWeight: 'bold' } }, { children: "\uC120\uD0DD \uC635\uC158" }), void 0), items.map(function (_a, index) {
                var key = _a.key, value = _a.value;
                return (_jsxs("div", __assign({ style: {
                        display: 'flex',
                        alignItems: 'center',
                    } }, { children: [_jsx("div", __assign({ style: { width: 20 } }, { children: _jsxs(Text, { children: [index + 1, "."] }, void 0) }), void 0), _jsx("div", __assign({ style: { flex: 1, margin: '0 10px' } }, { children: _jsx(Input, { placeholder: "\uC635\uC158 " + index, value: value, readOnly: true }, void 0) }), void 0), _jsx("div", { children: _jsx(IconButton, { icon: _jsx(TiTimes, {}, void 0), onClick: function () {
                                    removeItem(index);
                                } }, void 0) }, void 0)] }), key));
            }), _jsx(Input, { placeholder: '새로운 옵션 추가', onKeyUp: function (e) {
                    var target = e.target;
                    var value = target.value;
                    if (e.key === 'Enter' && value) {
                        appendItem(target.value);
                        target.value = '';
                        return;
                    }
                } }, void 0)] }, void 0));
};
export var CheckBox = function (_a) {
    var _b;
    var shape = _a.shape, value = _a.value, onChange = _a.onChange;
    return (_jsx(StyledCheckBox, { className: classnames((_b = {
                active: value
            },
            _b[shape] = true,
            _b)), value: value, shape: shape, onClick: function () { return onChange && onChange(!value); } }, void 0));
};
export var OptionMultipleSelector = function (_a) {
    var items = _a.items, value = _a.value, onChange = _a.onChange;
    var _b = useState(value), checked = _b[0], setChecked = _b[1];
    return (_jsx("div", { children: items.map(function (item, index) {
            var hasChecked = checked.includes(item.key);
            return (_jsxs(FlexContainer, __assign({ onClick: function () {
                    if (hasChecked) {
                        var update_1 = checked.filter(function (v) { return v !== item.key; });
                        setChecked(update_1);
                        onChange && onChange(update_1);
                    }
                    else {
                        var update_2 = __spreadArray(__spreadArray([], checked, true), [item.key], false);
                        setChecked(update_2);
                        onChange && onChange(update_2);
                    }
                } }, { children: [_jsx(FlexElement, __assign({ width: 40 }, { children: _jsx(StyledCheckBox, { className: classnames({
                                active: hasChecked,
                            }), shape: 'square', value: hasChecked }, void 0) }), void 0), _jsx(FlexElement, __assign({ width: 'flex' }, { children: _jsx(Text, { children: item.value }, void 0) }), void 0)] }), index));
        }) }, void 0));
};
export var OptionSingleSelector = function (_a) {
    var items = _a.items, value = _a.value, onChange = _a.onChange;
    var _b = useState(value), checked = _b[0], setChecked = _b[1];
    return (_jsx("div", { children: items.map(function (item, index) {
            var hasChecked = checked === item.key;
            return (_jsxs(FlexContainer, __assign({ onClick: function () {
                    setChecked(item.key);
                    onChange && onChange(item.key);
                } }, { children: [_jsx(FlexElement, __assign({ width: 40 }, { children: _jsx(StyledCheckBox, { className: classnames({
                                active: hasChecked,
                            }), shape: 'circle', value: hasChecked }, void 0) }), void 0), _jsx(FlexElement, __assign({ width: 'flex' }, { children: _jsx(Text, { children: item.value }, void 0) }), void 0)] }), index));
        }) }, void 0));
};
export var Switch = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 40 : _b, disabled = _a.disabled, defaultValue = _a.value, onChange = _a.onChange;
    var _c = useState(defaultValue), value = _c[0], setValue = _c[1];
    return (_jsx(StyledSwitch, __assign({ width: width, value: value, onClick: function () {
            if (disabled)
                return;
            setValue(!value);
            onChange && onChange(!value);
        } }, { children: _jsx("div", { className: 'switch-button' }, void 0) }), void 0));
};
export var RangeSelector = function (_a) {
    var min = _a.min, max = _a.max, value = _a.value, onChange = _a.onChange;
    var labelRef = useRef(null);
    var _b = useState(false), labelVisible = _b[0], setLabelVisible = _b[1];
    var _c = useState(value), currentValue = _c[0], setCurrentValue = _c[1];
    useClickAway(labelRef, function () {
        setLabelVisible(false);
    });
    return (_jsx(Range, { step: 1, min: min, max: max, renderTrack: function (_a) {
            var props = _a.props, children = _a.children;
            return (_jsx("div", __assign({}, props, { style: {
                    position: 'relative',
                    width: '100%',
                    height: '6px',
                    borderRadius: '3px',
                    backgroundColor: Colors.lightGray,
                } }, { children: children }), min));
        }, renderThumb: function (_a) {
            var props = _a.props;
            return (_createElement(StyledSelectorThumb, __assign({}, props, { key: max, onMouseEnter: function () {
                    if (!labelVisible) {
                        setLabelVisible(true);
                    }
                } }), labelVisible && (_jsx(StyledSelectorValueLabel, __assign({ ref: labelRef }, { children: _jsx(Text, { children: currentValue }, void 0) }), void 0))));
        }, values: [currentValue], onChange: function (values) { return setCurrentValue(values[0]); }, onFinalChange: function (values) { return onChange && onChange(values[0]); } }, void 0));
};
export var FileUploader = function (_a) {
    var files = _a.files, multiple = _a.multiple, onAddFile = _a.onAddFile, onRemoveFile = _a.onRemoveFile, onError = _a.onError;
    return (_jsx(FilePond, { files: files, allowMultiple: multiple, maxFiles: 3, labelIdle: '클릭 또는 드래그를 통해 파일을 업로드 할 수 있습니다.', onaddfile: function (_, file) { return onAddFile && onAddFile(file); }, onremovefile: function (_, file) { return onRemoveFile && onRemoveFile(file); }, onerror: function (error, file) { return onError && onError(error, file); } }, void 0));
};
