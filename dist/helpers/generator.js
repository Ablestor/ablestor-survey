import { BlockTypes } from '../@types/block';
export var createBlock = function (type, order) {
    var blockShape = { type: type, order: order, required: false };
    switch (type) {
        case BlockTypes.BLANK:
            return Object.assign(blockShape, {
                format: {},
            });
        case BlockTypes.SHORT_TEXT:
            return Object.assign(blockShape, {
                format: { regex: '', message: '' },
            });
        case BlockTypes.LONG_TEXT:
            return Object.assign(blockShape, {
                format: { regex: '', message: '' },
            });
        case BlockTypes.SWITCH:
            return Object.assign(blockShape, {
                format: { options: [''] },
            });
        case BlockTypes.CHECK_BOX:
            return Object.assign(blockShape, {
                format: { options: [''] },
            });
        case BlockTypes.SINGLE_SELECT:
            return Object.assign(blockShape, {
                format: { options: [''] },
            });
        case BlockTypes.MULTI_SELECT:
            return Object.assign(blockShape, {
                format: { options: [''] },
            });
        case BlockTypes.DROPDOWN:
            return Object.assign(blockShape, {
                format: { options: [''] },
            });
        // case BlockTypes.FILE_UPLOAD:
        //   return Object.assign(blockShape, {
        //     multiple: true,
        //     answer: [],
        //   }) as TypedBlock<BlockTypes.FILE_UPLOAD>;
        case BlockTypes.RANGE:
            return Object.assign(blockShape, {
                format: { options: ['1', '2', '3', '4', '5'], min: 1, minTitle: '', max: 5, maxTitle: '' },
            });
        case BlockTypes.DATE:
            return Object.assign(blockShape, {
                format: { regex: '', message: '' },
            });
        case BlockTypes.TIME:
            return Object.assign(blockShape, {
                format: { regex: '', message: '' },
            });
        default:
            throw new Error('return untyped block.');
    }
};
export var getRange = function (size) {
    var range = [];
    for (var i = 0; i < size; i++) {
        range.push(i);
    }
    return range;
};
