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
var react_1 = __importStar(require("react"));
var react_beautiful_dnd_1 = require("react-beautiful-dnd");
var ti_1 = require("react-icons/ti");
var immutability_helper_1 = __importDefault(require("immutability-helper"));
var block_1 = require("../@types/block");
var Section_1 = require("../components/Section");
var Inputs_1 = require("../components/Inputs");
var Buttons_1 = require("../components/Buttons");
var Texts_1 = require("../components/Texts");
var Blocks_1 = require("./Blocks");
var Editor = function (_a) {
    var submitButtonOptions = _a.submitButtonOptions, defaultValue = _a.defaultValue, onChange = _a.onChange, onSubmit = _a.onSubmit;
    var _b = (0, react_1.useState)((defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.title) || ''), surveyTitle = _b[0], setSurveyTitle = _b[1];
    var _c = (0, react_1.useState)((defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.description) || ''), surveyDescription = _c[0], setSurveyDescription = _c[1];
    var _d = (0, react_1.useState)((defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.content) || []), surveyContent = _d[0], setSurveyContent = _d[1];
    var extractSurveyResult = (0, react_1.useCallback)(function () { return ({
        title: surveyTitle,
        description: surveyDescription,
        content: surveyContent.filter(function (_a) {
            var type = _a.type;
            return type !== block_1.BlockTypes.BLANK;
        }),
    }); }, [surveyTitle, surveyDescription, surveyContent]);
    (0, react_1.useEffect)(function () {
        if (onChange) {
            onChange(extractSurveyResult());
        }
    }, [surveyTitle, surveyDescription, surveyContent]);
    var addBlock = (0, react_1.useCallback)(function () {
        var order = surveyContent.length + 1;
        setSurveyContent((0, immutability_helper_1.default)(surveyContent, {
            $push: [
                {
                    type: block_1.BlockTypes.BLANK,
                    order: order,
                    required: false,
                },
            ],
        }));
    }, [surveyContent]);
    var onUpdateBlock = function (index, data) {
        var _a;
        setSurveyContent((0, immutability_helper_1.default)(surveyContent, (_a = {},
            _a[index] = {
                $set: data,
            },
            _a)));
    };
    var onCopyBlock = function (index, data) {
        setSurveyContent((0, immutability_helper_1.default)(surveyContent, {
            $splice: [[index, 0, data]],
        }));
    };
    var onRemoveBlock = function (index) {
        setSurveyContent((0, immutability_helper_1.default)(surveyContent, {
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
    return (react_1.default.createElement(Section_1.SurveyContainer, null,
        react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(Inputs_1.Input, { placeholder: '설문 제목', value: surveyTitle, onChange: function (_a) {
                    var target = _a.target;
                    return setSurveyTitle(target.value);
                } }),
            react_1.default.createElement(Inputs_1.Input, { placeholder: '설문 설명', value: surveyDescription, onChange: function (_a) {
                    var target = _a.target;
                    return setSurveyDescription(target.value);
                } })),
        react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(react_beautiful_dnd_1.DragDropContext, { onDragEnd: onDragEnd },
                react_1.default.createElement(react_beautiful_dnd_1.Droppable, { droppableId: 'droppable' }, function (provided) { return (react_1.default.createElement("div", __assign({}, provided.droppableProps, { ref: provided.innerRef }),
                    surveyContent.map(function (block, i) { return (react_1.default.createElement(react_beautiful_dnd_1.Draggable, { key: i, draggableId: String(i), index: i }, function (provided) { return (react_1.default.createElement("div", __assign({ ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps),
                        react_1.default.createElement(Blocks_1.BlockPresenter, __assign({ key: i }, provided.draggableProps, provided.dragHandleProps, { block: block, onUpdateBlock: function (data) { return onUpdateBlock(i, data); }, onCopyBlock: function (data) { return onCopyBlock(i, data); }, onRemoveBlock: function () { return onRemoveBlock(i); } })))); })); }),
                    provided.placeholder)); }))),
        react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(Section_1.RoundDashedSection, { style: {
                    textAlign: 'center',
                    cursor: 'pointer',
                }, onClick: addBlock },
                react_1.default.createElement(ti_1.TiPlus, null),
                react_1.default.createElement(Texts_1.Text, null, "\uC0C8\uB85C\uC6B4 \uD56D\uBAA9 \uCD94\uAC00"))),
        (submitButtonOptions === null || submitButtonOptions === void 0 ? void 0 : submitButtonOptions.visible) && (react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(Buttons_1.Button, { onClick: function () { return onSubmit && onSubmit(extractSurveyResult()); } }, (submitButtonOptions === null || submitButtonOptions === void 0 ? void 0 : submitButtonOptions.text) || '전송')))));
};
exports.default = Editor;
