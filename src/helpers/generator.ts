import { BlockAlign, Blocks, BlockTypes, TypedBlock } from '../@types/block';

export const createBlock = <T extends BlockTypes>(type: T, order: number): Blocks => {
  const blockShape = { type, order };

  switch (type) {
    case BlockTypes.BLANK:
      return blockShape as TypedBlock<BlockTypes.BLANK>;

    case BlockTypes.TEXT:
      return Object.assign(blockShape, {
        title: '',
      }) as TypedBlock<BlockTypes.TEXT>;

    case BlockTypes.IMAGE:
      return Object.assign(blockShape, {
        image: '',
        align: BlockAlign.CENTER,
      }) as TypedBlock<BlockTypes.IMAGE>;

    case BlockTypes.VIDEO:
      return Object.assign(blockShape, {
        url: '',
        align: BlockAlign.CENTER,
      }) as TypedBlock<BlockTypes.VIDEO>;

    case BlockTypes.SHORT_TEXT:
      return Object.assign(blockShape, {
        answer: '',
      }) as TypedBlock<BlockTypes.SHORT_TEXT>;

    case BlockTypes.LONG_TEXT:
      return Object.assign(blockShape, {
        answer: '',
      }) as TypedBlock<BlockTypes.LONG_TEXT>;

    case BlockTypes.SINGLE_SELECT:
      return Object.assign(blockShape, {
        question: [] as string[],
        answer: null,
      }) as TypedBlock<BlockTypes.SINGLE_SELECT>;

    case BlockTypes.MULTI_SELECT:
      return Object.assign(blockShape, {
        question: [] as string[],
        answer: [] as number[],
      }) as TypedBlock<BlockTypes.MULTI_SELECT>;

    case BlockTypes.DROPDOWN:
      return Object.assign(blockShape, {
        question: [] as string[],
        answer: null,
      }) as TypedBlock<BlockTypes.DROPDOWN>;

    case BlockTypes.FILE_UPLOAD:
      return Object.assign(blockShape, {
        multiple: true,
        answer: [],
      }) as TypedBlock<BlockTypes.FILE_UPLOAD>;

    case BlockTypes.RANGE:
      return Object.assign(blockShape, {
        min: 1,
        max: 5,
        answer: null,
      }) as TypedBlock<BlockTypes.RANGE>;

    case BlockTypes.DATE:
      return Object.assign(blockShape, {
        value: '',
        answer: '',
      }) as TypedBlock<BlockTypes.DATE>;

    case BlockTypes.TIME:
      return Object.assign(blockShape, {
        value: '',
        answer: '',
      }) as TypedBlock<BlockTypes.TIME>;

    default:
      throw new Error('return untyped block.');
  }
};
