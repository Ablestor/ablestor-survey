import { Blocks, BlockTypes, TypedBlock } from '../@types/block';

export const createBlock = <T extends BlockTypes>(type: T, order: number): Blocks => {
  const blockShape = { type, order, required: false };

  switch (type) {
    case BlockTypes.BLANK:
      return Object.assign(blockShape, {
        title: '',
        format: {},
      }) as TypedBlock<BlockTypes.BLANK>;
    case BlockTypes.SHORT_TEXT:
      return Object.assign(blockShape, {
        title: '',
        format: { regex: '', message: '' },
      }) as TypedBlock<BlockTypes.SHORT_TEXT>;
    case BlockTypes.LONG_TEXT:
      return Object.assign(blockShape, {
        title: '',
        format: { regex: '', message: '' },
      }) as TypedBlock<BlockTypes.LONG_TEXT>;
    case BlockTypes.SWITCH:
      return Object.assign(blockShape, {
        title: '',
        format: { options: [''] },
      }) as TypedBlock<BlockTypes.SWITCH>;
    case BlockTypes.CHECK_BOX:
      return Object.assign(blockShape, {
        title: '',
        format: { options: [''] },
      }) as TypedBlock<BlockTypes.CHECK_BOX>;
    case BlockTypes.SINGLE_SELECT:
      return Object.assign(blockShape, {
        title: '',
        format: { options: [] },
      }) as TypedBlock<BlockTypes.SINGLE_SELECT>;
    case BlockTypes.MULTI_SELECT:
      return Object.assign(blockShape, {
        title: '',
        format: { options: [] },
      }) as TypedBlock<BlockTypes.MULTI_SELECT>;
    case BlockTypes.DROPDOWN:
      return Object.assign(blockShape, {
        title: '',
        format: { options: [] },
      }) as TypedBlock<BlockTypes.DROPDOWN>;

    // case BlockTypes.FILE_UPLOAD:
    //   return Object.assign(blockShape, {
    //     multiple: true,
    //     answer: [],
    //   }) as TypedBlock<BlockTypes.FILE_UPLOAD>;

    case BlockTypes.RANGE:
      return Object.assign(blockShape, {
        title: '',
        format: { options: ['1', '2', '3', '4', '5'], min: 1, minTitle: '', max: 5, maxTitle: '' },
      }) as TypedBlock<BlockTypes.RANGE>;
    case BlockTypes.DATE:
      return Object.assign(blockShape, {
        title: '',
        format: { regex: '', message: '' },
      }) as TypedBlock<BlockTypes.DATE>;

    case BlockTypes.TIME:
      return Object.assign(blockShape, {
        title: '',
        format: { regex: '', message: '' },
      }) as TypedBlock<BlockTypes.TIME>;

    default:
      throw new Error('return untyped block.');
  }
};

export const getRange = (size: number): number[] => {
  const range = [];

  for (let i = 0; i < size; i++) {
    range.push(i);
  }

  return range;
};
