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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPresenter = void 0;
var react_1 = __importStar(require("react"));
var ti_1 = require("react-icons/ti");
var classnames_1 = __importDefault(require("classnames"));
var uuid_1 = require("uuid");
var block_1 = require("../../@types/block");
var styled_1 = require("./styled");
var Inputs_1 = require("../../components/Inputs");
var Buttons_1 = require("../../components/Buttons");
var Texts_1 = require("../../components/Texts");
var Section_1 = require("../../components/Section");
var generator_1 = require("../../helpers/generator");
var converter_1 = require("../../helpers/converter");
var blocks_1 = require("../../constants/blocks");
var startAt = 2;
var minRange = (0, generator_1.getRange)(startAt).map(function (i) { return ({
    key: (0, uuid_1.v4)(),
    label: String(i),
    value: i,
}); });
var maxRange = (0, generator_1.getRange)(9).map(function (i) { return ({
    key: (0, uuid_1.v4)(),
    label: String(startAt + i),
    value: startAt + i,
}); });
var BlockPresenter = function (_a) {
    var block = _a.block, onUpdateBlock = _a.onUpdateBlock, onCopyBlock = _a.onCopyBlock, onRemoveBlock = _a.onRemoveBlock;
    var isTypedBlock = block.type !== block_1.BlockTypes.BLANK;
    var _b = (0, react_1.useState)(block.title), title = _b[0], setTitle = _b[1];
    var _c = (0, react_1.useState)(block.description), description = _c[0], setDescription = _c[1];
    return (react_1.default.createElement(styled_1.BlockContainer, { className: (0, classnames_1.default)({
            required: block.required,
        }) },
        react_1.default.createElement(Section_1.FlexContainer, null,
            react_1.default.createElement(Section_1.FlexElement, { width: 'flex' },
                react_1.default.createElement(Texts_1.Text, { style: { fontWeight: 'bold' } }, isTypedBlock
                    ? (0, converter_1.getNameFromBlockType)(block.type.toLowerCase())
                    : '설문 유형을 선택해주세요.')),
            react_1.default.createElement(Section_1.FlexElement, { width: 220 },
                react_1.default.createElement(Inputs_1.Select, { items: blocks_1.blockList, selectedIndex: blocks_1.blockList.findIndex(function (b) { return b.value.toLowerCase() === block.type; }), onChange: function (_a) {
                        var value = _a.value;
                        var newBlock = (0, generator_1.createBlock)(value.toLowerCase(), block.order);
                        onUpdateBlock(__assign(__assign({}, newBlock), { title: title, description: description }));
                    } }))),
        isTypedBlock && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Inputs_1.Input, { placeholder: '제목을 입력해주세요.', value: title, onChange: function (_a) {
                    var target = _a.target;
                    var title = target.value;
                    setTitle(title);
                    onUpdateBlock(__assign(__assign({}, block), { title: title }));
                } }),
            react_1.default.createElement(Inputs_1.Input, { placeholder: '설명을 입력해주세요.', value: description, onChange: function (_a) {
                    var target = _a.target;
                    var description = target.value;
                    setDescription(description);
                    onUpdateBlock(__assign(__assign({}, block), { description: description }));
                } }))),
        (block.type === block_1.BlockTypes.SINGLE_SELECT ||
            block.type === block_1.BlockTypes.MULTI_SELECT ||
            block.type === block_1.BlockTypes.DROPDOWN) && (react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(Inputs_1.OptionEditor, { items: block.question, onChange: function (question) { return onUpdateBlock(__assign(__assign({}, block), { question: question })); } }))),
        block.type === block_1.BlockTypes.SWITCH && (react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(Inputs_1.Input, { defaultValue: block.switchTitle, placeholder: '스위치 타이틀', onChange: function (_a) {
                    var target = _a.target;
                    return onUpdateBlock(__assign(__assign({}, block), { switchTitle: target.value }));
                } }))),
        block.type === block_1.BlockTypes.CHECK_BOX && (react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(Inputs_1.Input, { defaultValue: block.checkboxTitle, placeholder: '체크박스 타이틀', onChange: function (_a) {
                    var target = _a.target;
                    return onUpdateBlock(__assign(__assign({}, block), { checkboxTitle: target.value }));
                } }))),
        block.type === block_1.BlockTypes.FILE_UPLOAD && (react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(Section_1.FlexContainer, null,
                react_1.default.createElement(Section_1.FlexElement, { width: 'flex' },
                    react_1.default.createElement(Texts_1.Text, null, "\uC5EC\uB7EC \uD30C\uC77C \uC5C5\uB85C\uB4DC \uD5C8\uC6A9")),
                react_1.default.createElement(Section_1.FlexElement, { width: 40 },
                    react_1.default.createElement(Inputs_1.Switch, { value: block.multiple, onChange: function (multiple) { return onUpdateBlock(__assign(__assign({}, block), { multiple: multiple })); } }))))),
        block.type === block_1.BlockTypes.RANGE && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Section_1.Row, null,
                react_1.default.createElement(Section_1.FlexContainer, null,
                    react_1.default.createElement(Section_1.FlexElement, { width: 60 },
                        react_1.default.createElement(Texts_1.Text, null, "\uCD5C\uC18C \uAC12")),
                    react_1.default.createElement(Section_1.FlexElement, { width: 'flex' },
                        react_1.default.createElement(Inputs_1.Select, { items: minRange, selectedIndex: minRange.findIndex(function (r) { return r.value === block.min; }), onChange: function (_a) {
                                var value = _a.value;
                                return onUpdateBlock(__assign(__assign({}, block), { min: value }));
                            } })),
                    react_1.default.createElement(Section_1.FlexElement, { width: 60 },
                        react_1.default.createElement(Texts_1.Text, null, "\uCD5C\uB300 \uAC12")),
                    react_1.default.createElement(Section_1.FlexElement, { width: 'flex' },
                        react_1.default.createElement(Inputs_1.Select, { items: maxRange, selectedIndex: maxRange.findIndex(function (r) { return r.value === block.max; }), onChange: function (_a) {
                                var value = _a.value;
                                return onUpdateBlock(__assign(__assign({}, block), { max: value }));
                            } })))),
            react_1.default.createElement(Section_1.Row, null,
                react_1.default.createElement(Section_1.FlexContainer, null,
                    react_1.default.createElement(Section_1.FlexElement, { width: 120 },
                        react_1.default.createElement(Texts_1.Text, null, "\uCD5C\uC18C \uAC12 \uD0C0\uC774\uD2C0")),
                    react_1.default.createElement(Section_1.FlexElement, { width: 'flex' },
                        react_1.default.createElement(Inputs_1.Input, { defaultValue: block.minTitle, placeholder: 'ex) 부족함', onChange: function (_a) {
                                var target = _a.target;
                                return onUpdateBlock(__assign(__assign({}, block), { minTitle: target.value }));
                            } }))),
                react_1.default.createElement(Section_1.FlexContainer, null,
                    react_1.default.createElement(Section_1.FlexElement, { width: 120 },
                        react_1.default.createElement(Texts_1.Text, null, "\uCD5C\uB313 \uAC12 \uD0C0\uC774\uD2C0")),
                    react_1.default.createElement(Section_1.FlexElement, { width: 'flex' },
                        react_1.default.createElement(Inputs_1.Input, { defaultValue: block.maxTitle, placeholder: 'ex) 만족함', onChange: function (_a) {
                                var target = _a.target;
                                return onUpdateBlock(__assign(__assign({}, block), { maxTitle: target.value }));
                            } })))))),
        react_1.default.createElement(styled_1.BlockButtonSection, null,
            react_1.default.createElement(Buttons_1.IconButton, { icon: block.required ? react_1.default.createElement(ti_1.TiTick, null) : react_1.default.createElement(ti_1.TiTickOutline, null), text: block.required ? '필수 입력' : '선택 입력', active: block.required, onClick: function () { return onUpdateBlock(__assign(__assign({}, block), { required: !block.required })); } }),
            react_1.default.createElement(Buttons_1.IconButton, { icon: react_1.default.createElement(ti_1.TiTabsOutline, null), onClick: function () { return onCopyBlock(block); } }),
            react_1.default.createElement(Section_1.VerticalDivider, null),
            react_1.default.createElement(Buttons_1.IconButton, { icon: react_1.default.createElement(ti_1.TiTrash, null), onClick: onRemoveBlock }))));
};
exports.BlockPresenter = BlockPresenter;
