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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPresenter = void 0;
var react_1 = __importDefault(require("react"));
var ej2_react_calendars_1 = require("@syncfusion/ej2-react-calendars");
var dayjs_1 = __importDefault(require("dayjs"));
var classnames_1 = __importDefault(require("classnames"));
var colors_1 = __importDefault(require("../../constants/colors"));
var format_1 = require("../../constants/format");
var block_1 = require("../../@types/block");
var styled_1 = require("./styled");
var Inputs_1 = require("../../components/Inputs");
var Texts_1 = require("../../components/Texts");
var Section_1 = require("../../components/Section");
var BlockPresenter = function (_a) {
    var block = _a.block, onFileUpload = _a.onFileUpload, onFileRemove = _a.onFileRemove, onUpdateBlock = _a.onUpdateBlock;
    return (react_1.default.createElement(styled_1.BlockContainer, { className: (0, classnames_1.default)({
            required: block.required,
        }) },
        react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(Section_1.FlexContainer, null,
                block.required && (react_1.default.createElement(Section_1.FlexElement, { width: 7 },
                    react_1.default.createElement(Texts_1.Title, { style: { color: colors_1.default.main } }, "*"))),
                react_1.default.createElement(Section_1.FlexElement, { width: 'flex' }, block.title))),
        react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(Texts_1.Description, null, block.description)),
        block.type === block_1.BlockTypes.SHORT_TEXT && (react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(Inputs_1.Input, { placeholder: '이 곳에 입력해주세요.', onChange: function (_a) {
                    var target = _a.target;
                    return onUpdateBlock(__assign(__assign({}, block), { answer: target.value }));
                } }))),
        block.type === block_1.BlockTypes.LONG_TEXT && (react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(Inputs_1.Textarea, { placeholder: '이 곳에 입력해주세요.', onChange: function (_a) {
                    var target = _a.target;
                    return onUpdateBlock(__assign(__assign({}, block), { answer: target.value }));
                } }))),
        block.type === block_1.BlockTypes.SWITCH && (react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(Section_1.FlexContainer, null,
                react_1.default.createElement(Section_1.FlexElement, { width: 'flex' },
                    react_1.default.createElement(Texts_1.Text, null, block.switchTitle)),
                react_1.default.createElement(Section_1.FlexElement, { width: 40 },
                    react_1.default.createElement(Inputs_1.Switch, { onChange: function (answer) { return onUpdateBlock(__assign(__assign({}, block), { answer: answer })); } }))))),
        block.type === block_1.BlockTypes.CHECK_BOX && (react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(Section_1.FlexContainer, null,
                react_1.default.createElement(Section_1.FlexElement, { width: 'flex' },
                    react_1.default.createElement(Texts_1.Text, null, block.checkboxTitle)),
                react_1.default.createElement(Section_1.FlexElement, { width: 40 },
                    react_1.default.createElement(Inputs_1.CheckBox, { shape: 'square', value: block.answer, onChange: function (answer) { return onUpdateBlock(__assign(__assign({}, block), { answer: answer })); } }))))),
        block.type === block_1.BlockTypes.SINGLE_SELECT && (react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(Inputs_1.OptionSingleSelector, { items: block.question, value: block.answer || null, onChange: function (answer) { return onUpdateBlock(__assign(__assign({}, block), { answer: answer })); } }))),
        block.type === block_1.BlockTypes.MULTI_SELECT && (react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(Inputs_1.OptionMultipleSelector, { items: block.question, value: block.answer, onChange: function (answer) { return onUpdateBlock(__assign(__assign({}, block), { answer: answer })); } }))),
        block.type === block_1.BlockTypes.DROPDOWN && (react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(Inputs_1.Select, { items: block.question, selectedIndex: block.question.findIndex(function (q) { return q.key === block.answer; }), onChange: function (index) {
                    var questionKey = block.question[index].key;
                    onUpdateBlock(__assign(__assign({}, block), { answer: questionKey }));
                } }))),
        block.type === block_1.BlockTypes.FILE_UPLOAD && (react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(Inputs_1.FileUploader, { files: block.answer, multiple: block.multiple, onAddFile: function (file) { return onFileUpload && onFileUpload(file); }, onRemoveFile: function (file) { return onFileRemove && onFileRemove(file); }, onError: function (error) { return console.error(error); } }))),
        block.type === block_1.BlockTypes.RANGE && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Section_1.Row, null,
                react_1.default.createElement(Section_1.FlexContainer, null,
                    react_1.default.createElement(Section_1.FlexElement, { width: 140 },
                        react_1.default.createElement(Texts_1.Text, null, block.minTitle)),
                    react_1.default.createElement(Section_1.FlexElement, { width: 'flex' },
                        react_1.default.createElement(Inputs_1.RangeSelector, { min: block.min, max: block.max, value: block.answer || 1, onChange: function (answer) { return onUpdateBlock(__assign(__assign({}, block), { answer: answer })); } })),
                    react_1.default.createElement(Section_1.FlexElement, { width: 140, style: {
                            textAlign: 'right',
                        } },
                        react_1.default.createElement(Texts_1.Text, null, block.maxTitle)))))),
        block.type === block_1.BlockTypes.DATE && (react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(Section_1.FlexContainer, null,
                react_1.default.createElement(Section_1.FlexElement, { width: 'flex' },
                    react_1.default.createElement(Texts_1.Text, null, "\uB0A0\uC9DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.")),
                react_1.default.createElement(Section_1.FlexElement, { width: 200 },
                    react_1.default.createElement(ej2_react_calendars_1.DatePickerComponent, { format: format_1.DATETIME.DateDisplay, value: new Date(block.answer), onChange: function (_a) {
                            var value = _a.value;
                            var date = (0, dayjs_1.default)(value).format(format_1.DATETIME.DateValue);
                            onUpdateBlock(__assign(__assign({}, block), { answer: date }));
                        } }))))),
        block.type === block_1.BlockTypes.TIME && (react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(Section_1.FlexContainer, null,
                react_1.default.createElement(Section_1.FlexElement, { width: 'flex' },
                    react_1.default.createElement(Texts_1.Text, null, "\uC2DC\uAC04\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.")),
                react_1.default.createElement(Section_1.FlexElement, { width: 200 },
                    react_1.default.createElement(ej2_react_calendars_1.TimePickerComponent, { format: format_1.DATETIME.TimeDisplay, value: new Date(block.answer), onChange: function (_a) {
                            var value = _a.value;
                            var date = (0, dayjs_1.default)(value).format(format_1.DATETIME.TimeValue);
                            onUpdateBlock(__assign(__assign({}, block), { answer: date }));
                        } })))))));
};
exports.BlockPresenter = BlockPresenter;
