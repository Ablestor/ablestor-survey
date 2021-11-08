"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRange = exports.createBlock = void 0;
var block_1 = require("../@types/block");
var createBlock = function (type, order) {
    var blockShape = { type: type, order: order, required: false };
    switch (type) {
        case block_1.BlockTypes.BLANK:
            return blockShape;
        case block_1.BlockTypes.SHORT_TEXT:
            return Object.assign(blockShape, {
                answer: '',
            });
        case block_1.BlockTypes.LONG_TEXT:
            return Object.assign(blockShape, {
                answer: '',
            });
        case block_1.BlockTypes.SWITCH:
            return Object.assign(blockShape, {
                switchTitle: '',
                answer: false,
            });
        case block_1.BlockTypes.CHECK_BOX:
            return Object.assign(blockShape, {
                checkboxTitle: '',
                answer: false,
            });
        case block_1.BlockTypes.SINGLE_SELECT:
            return Object.assign(blockShape, {
                question: [],
                answer: null,
            });
        case block_1.BlockTypes.MULTI_SELECT:
            return Object.assign(blockShape, {
                question: [],
                answer: [],
            });
        case block_1.BlockTypes.DROPDOWN:
            return Object.assign(blockShape, {
                question: [],
                answer: null,
            });
        case block_1.BlockTypes.FILE_UPLOAD:
            return Object.assign(blockShape, {
                multiple: true,
                answer: [],
            });
        case block_1.BlockTypes.RANGE:
            return Object.assign(blockShape, {
                min: 1,
                minTitle: '',
                max: 5,
                maxTitle: '',
                answer: null,
            });
        case block_1.BlockTypes.DATE:
            return Object.assign(blockShape, {
                value: '',
                answer: '',
            });
        case block_1.BlockTypes.TIME:
            return Object.assign(blockShape, {
                value: '',
                answer: '',
            });
        default:
            throw new Error('return untyped block.');
    }
};
exports.createBlock = createBlock;
var getRange = function (size) {
    var range = [];
    for (var i = 0; i < size; i++) {
        range.push(i);
    }
    return range;
};
exports.getRange = getRange;
