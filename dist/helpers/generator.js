import { BlockTypes } from '../@types/block';
export const createBlock = (type, order) => {
    const blockShape = { type, order, required: false };
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
        case BlockTypes.FILE_UPLOAD:
            return Object.assign(blockShape, {
                multiple: true,
                answer: [],
            });
        case BlockTypes.RANGE:
            return Object.assign(blockShape, {
                min: 1,
                minTitle: '',
                max: 5,
                maxTitle: '',
                answer: null,
            });
        case BlockTypes.DATE:
            return Object.assign(blockShape, {
                value: '',
                answer: '',
            });
        case BlockTypes.TIME:
            return Object.assign(blockShape, {
                value: '',
                answer: '',
            });
        default:
            throw new Error('return untyped block.');
    }
};
