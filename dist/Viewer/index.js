"use strict";
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
var immutability_helper_1 = __importDefault(require("immutability-helper"));
var Section_1 = require("../components/Section");
var Texts_1 = require("../components/Texts");
var Blocks_1 = require("./Blocks");
var block_1 = require("../@types/block");
var Buttons_1 = require("../components/Buttons");
require("filepond/dist/filepond.min.css");
var Viewer = function (_a) {
    var survey = _a.survey, onSubmit = _a.onSubmit;
    var _b = (0, react_1.useState)(survey), surveyContent = _b[0], setSurveyContent = _b[1];
    (0, react_1.useEffect)(function () {
        setSurveyContent(survey);
    }, [survey]);
    var onUpdateBlock = function (index, data) {
        var _a;
        setSurveyContent((0, immutability_helper_1.default)(surveyContent, {
            content: (_a = {},
                _a[index] = {
                    $set: data,
                },
                _a),
        }));
    };
    var title = surveyContent.title, description = surveyContent.description, content = surveyContent.content;
    return (react_1.default.createElement(Section_1.SurveyContainer, null,
        react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(Texts_1.Title, null, title)),
        react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(Texts_1.Description, null, description)),
        content.map(function (block, i) { return (react_1.default.createElement(Section_1.Row, { key: i },
            react_1.default.createElement(Blocks_1.BlockPresenter, { block: block, onUpdateBlock: function (data) { return onUpdateBlock(i, data); } }))); }),
        react_1.default.createElement(Section_1.Row, null,
            react_1.default.createElement(Buttons_1.Button, { onClick: function () {
                    var invalidContents = content.filter(function (block) {
                        if (block.type === block_1.BlockTypes.BLANK) {
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
                    onSubmit(surveyContent);
                } }, "\uD655\uC778"))));
};
exports.default = Viewer;
