import { BlockTypes } from '../@types/block';
export var createBlock = function (id, type, order) {
    var blockShape = { id: id, type: type, order: order, required: false };
    switch (type) {
        case BlockTypes.BLANK:
            return blockShape;
        case BlockTypes.SHORT_TEXT:
            return Object.assign(blockShape, {
                answer: '',
            });
        case BlockTypes.LONG_TEXT:
            return Object.assign(blockShape, {
                answer: '',
            });
        case BlockTypes.SWITCH:
            return Object.assign(blockShape, {
                switchTitle: '',
                answer: false,
            });
        case BlockTypes.CHECK_BOX:
            return Object.assign(blockShape, {
                checkboxTitle: '',
                answer: false,
            });
        case BlockTypes.SINGLE_SELECT:
            return Object.assign(blockShape, {
                question: [],
                answer: null,
            });
        case BlockTypes.MULTI_SELECT:
            return Object.assign(blockShape, {
                question: [],
                answer: [],
            });
        case BlockTypes.DROPDOWN:
            return Object.assign(blockShape, {
                question: [],
                answer: null,
            });
        // case BlockTypes.FILE_UPLOAD:
        //   return Object.assign(blockShape, {
        //     multiple: true,
        //     answer: [],
        //   }) as TypedBlock<BlockTypes.FILE_UPLOAD>;
        case BlockTypes.RANGE:
            return Object.assign(blockShape, {
                min: 1,
                minTitle: '',
                max: 5,
                maxTitle: '',
                answer: null,
            });
        // case BlockTypes.DATE:
        //   return Object.assign(blockShape, {
        //     value: '',
        //     answer: '',
        //   }) as TypedBlock<BlockTypes.DATE>;
        // case BlockTypes.TIME:
        //   return Object.assign(blockShape, {
        //     value: '',
        //     answer: '',
        //   }) as TypedBlock<BlockTypes.TIME>;
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
