"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploader = exports.RangeSelector = exports.Switch = exports.OptionSingleSelector = exports.OptionMultipleSelector = exports.CheckBox = exports.OptionEditor = exports.Select = exports.Textarea = exports.Input = void 0;
var react_1 = __importStar(require("react"));
var immutability_helper_1 = __importDefault(require("immutability-helper"));
var classnames_1 = __importDefault(require("classnames"));
var uuid_1 = require("uuid");
var ti_1 = require("react-icons/ti");
var react_filepond_1 = require("react-filepond");
var react_range_1 = require("react-range");
var colors_1 = __importDefault(require("../../constants/colors"));
var hooks_1 = require("../../hooks");
var Buttons_1 = require("../Buttons");
var Section_1 = require("../Section");
var Texts_1 = require("../Texts");
var styled_1 = require("./styled");
var Input = function (props) { return react_1.default.createElement(styled_1.StyledInput, __assign({}, props)); };
exports.Input = Input;
var Textarea = function (props) { return react_1.default.createElement(styled_1.StyledTextarea, __assign({}, props)); };
exports.Textarea = Textarea;
var Select = function (_a) {
    var _b, _c;
    var items = _a.items, selectedIndex = _a.selectedIndex, onChange = _a.onChange;
    var selectRef = (0, react_1.useRef)(null);
    var _d = (0, react_1.useState)(false), listVisible = _d[0], setListVisible = _d[1];
    var _e = (0, react_1.useState)(selectedIndex || 0), index = _e[0], setIndex = _e[1];
    (0, hooks_1.useClickAway)(selectRef, function () { return setListVisible(false); });
    return (react_1.default.createElement(styled_1.StyledSelect, { ref: selectRef, onClick: function () { return setListVisible(true); } },
        react_1.default.createElement("div", { className: 'select-current-value' },
            react_1.default.createElement(Texts_1.Text, null, (_c = (_b = items[index]) === null || _b === void 0 ? void 0 : _b.label) !== null && _c !== void 0 ? _c : '목록에서 선택해주세요.'),
            react_1.default.createElement("div", { className: 'select-icon' },
                react_1.default.createElement(ti_1.TiArrowSortedDown, null))),
        listVisible && (react_1.default.createElement("div", { className: 'select-options-container' }, items.map(function (item, index) { return (react_1.default.createElement("div", { className: (0, classnames_1.default)({
                'select-options': true,
                selected: selectedIndex === item.value,
            }), key: item.key, onClick: function (e) {
                e.stopPropagation();
                setIndex(index);
                onChange && onChange(index);
                setListVisible(false);
            } }, item.label)); })))));
};
exports.Select = Select;
var OptionEditor = function (_a) {
    var items = _a.items, onChange = _a.onChange;
    var appendItem = function (value) {
        return onChange && onChange(__spreadArray(__spreadArray([], items, true), [{ key: (0, uuid_1.v4)(), label: value, value: value }], false));
    };
    var removeItem = function (index) {
        return onChange && onChange((0, immutability_helper_1.default)(items, { $splice: [[index, 1]] }));
    };
    return (react_1.default.createElement(Section_1.RoundSection, null,
        react_1.default.createElement(Texts_1.Text, { style: { fontWeight: 'bold' } }, "\uC120\uD0DD \uC635\uC158"),
        items.map(function (_a, index) {
            var key = _a.key, value = _a.value;
            return (react_1.default.createElement("div", { key: key, style: {
                    display: 'flex',
                    alignItems: 'center',
                } },
                react_1.default.createElement("div", { style: { width: 20 } },
                    react_1.default.createElement(Texts_1.Text, null,
                        index + 1,
                        ".")),
                react_1.default.createElement("div", { style: { flex: 1, margin: '0 10px' } },
                    react_1.default.createElement(exports.Input, { placeholder: "\uC635\uC158 " + index, value: value, readOnly: true })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(Buttons_1.IconButton, { icon: react_1.default.createElement(ti_1.TiTimes, null), onClick: function () {
                            removeItem(index);
                        } }))));
        }),
        react_1.default.createElement(exports.Input, { placeholder: '새로운 옵션 추가', onKeyUp: function (e) {
                var target = e.target;
                var value = target.value;
                if (e.key === 'Enter' && value) {
                    appendItem(target.value);
                    target.value = '';
                    return;
                }
            } })));
};
exports.OptionEditor = OptionEditor;
var CheckBox = function (_a) {
    var _b;
    var shape = _a.shape, value = _a.value, onChange = _a.onChange;
    return (react_1.default.createElement(styled_1.StyledCheckBox, { className: (0, classnames_1.default)((_b = {
                active: value
            },
            _b[shape] = true,
            _b)), value: value, shape: shape, onClick: function () { return onChange && onChange(!value); } }));
};
exports.CheckBox = CheckBox;
var OptionMultipleSelector = function (_a) {
    var items = _a.items, value = _a.value, onChange = _a.onChange;
    var _b = (0, react_1.useState)(value), checked = _b[0], setChecked = _b[1];
    return (react_1.default.createElement("div", null, items.map(function (item, index) {
        var hasChecked = checked.includes(item.key);
        return (react_1.default.createElement(Section_1.FlexContainer, { key: index, onClick: function () {
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
            } },
            react_1.default.createElement(Section_1.FlexElement, { width: 40 },
                react_1.default.createElement(styled_1.StyledCheckBox, { className: (0, classnames_1.default)({
                        active: hasChecked,
                    }), shape: 'square', value: hasChecked })),
            react_1.default.createElement(Section_1.FlexElement, { width: 'flex' },
                react_1.default.createElement(Texts_1.Text, null, item.value))));
    })));
};
exports.OptionMultipleSelector = OptionMultipleSelector;
var OptionSingleSelector = function (_a) {
    var items = _a.items, value = _a.value, onChange = _a.onChange;
    var _b = (0, react_1.useState)(value), checked = _b[0], setChecked = _b[1];
    return (react_1.default.createElement("div", null, items.map(function (item, index) {
        var hasChecked = checked === item.key;
        return (react_1.default.createElement(Section_1.FlexContainer, { key: index, onClick: function () {
                setChecked(item.key);
                onChange && onChange(checked);
            } },
            react_1.default.createElement(Section_1.FlexElement, { width: 40 },
                react_1.default.createElement(styled_1.StyledCheckBox, { className: (0, classnames_1.default)({
                        active: hasChecked,
                    }), shape: 'circle', value: hasChecked })),
            react_1.default.createElement(Section_1.FlexElement, { width: 'flex' },
                react_1.default.createElement(Texts_1.Text, null, item.value))));
    })));
};
exports.OptionSingleSelector = OptionSingleSelector;
var Switch = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 40 : _b, disabled = _a.disabled, defaultValue = _a.value, onChange = _a.onChange;
    var _c = (0, react_1.useState)(defaultValue), value = _c[0], setValue = _c[1];
    return (react_1.default.createElement(styled_1.StyledSwitch, { width: width, value: value, onClick: function () {
            if (disabled)
                return;
            setValue(!value);
            onChange && onChange(!value);
        } },
        react_1.default.createElement("div", { className: 'switch-button' })));
};
exports.Switch = Switch;
var RangeSelector = function (_a) {
    var min = _a.min, max = _a.max, value = _a.value, onChange = _a.onChange;
    var labelRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(false), labelVisible = _b[0], setLabelVisible = _b[1];
    var _c = (0, react_1.useState)(value), currentValue = _c[0], setCurrentValue = _c[1];
    (0, hooks_1.useClickAway)(labelRef, function () {
        setLabelVisible(false);
    });
    return (react_1.default.createElement(react_range_1.Range, { step: 1, min: min, max: max, renderTrack: function (_a) {
            var props = _a.props, children = _a.children;
            return (react_1.default.createElement("div", __assign({ key: min }, props, { style: {
                    width: '100%',
                    height: '6px',
                    borderRadius: '3px',
                    backgroundColor: colors_1.default.lightGray,
                } }), children));
        }, renderThumb: function (_a) {
            var props = _a.props;
            return (react_1.default.createElement(styled_1.StyledSelectorThumb, __assign({}, props, { key: max, onMouseEnter: function () {
                    if (!labelVisible) {
                        setLabelVisible(true);
                    }
                } }), labelVisible && (react_1.default.createElement(styled_1.StyledSelectorValueLabel, { ref: labelRef },
                react_1.default.createElement(Texts_1.Text, null, currentValue)))));
        }, values: [currentValue], onChange: function (values) { return setCurrentValue(values[0]); }, onFinalChange: function (values) { return onChange && onChange(values[0]); } }));
};
exports.RangeSelector = RangeSelector;
var FileUploader = function (_a) {
    var files = _a.files, multiple = _a.multiple, onAddFile = _a.onAddFile, onRemoveFile = _a.onRemoveFile, onError = _a.onError;
    return (react_1.default.createElement(react_filepond_1.FilePond, { files: files, allowMultiple: multiple, maxFiles: 3, labelIdle: '클릭 또는 드래그를 통해 파일을 업로드 할 수 있습니다.', onaddfile: function (_, file) { return onAddFile && onAddFile(file); }, onremovefile: function (_, file) { return onRemoveFile && onRemoveFile(file); }, onerror: function (error, file) { return onError && onError(error, file); } }));
};
exports.FileUploader = FileUploader;
