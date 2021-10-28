export enum BlockTypes {
  BLANK = 'blank',
  TEXT = 'text',
  IMAGE = 'image',
  VIDEO = 'video',
  SHORT_TEXT = 'short_text',
  LONG_TEXT = 'long_text',
  SINGLE_SELECT = 'single_select',
  MULTI_SELECT = 'multi_select',
  DROPDOWN = 'dropdown',
  FILE_UPLOAD = 'file_upload',
  RANGE = 'range',
  DATE = 'date',
  TIME = 'time',
}

export enum BlockAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export interface IBlock {
  type: BlockTypes;
  order: number;
  title?: string;
  description?: string;
  required?: boolean;
}

export type Blocks =
  | ISurveyBlankBlock
  | ISurveyTextBlock
  | ISurveyImageBlock
  | ISurveyVideoBlock
  | ISurveyShortTextBlock
  | ISurveyLongTextBlock
  | ISurveySingleSelectBlock
  | ISurveyMultiSelectBlock
  | ISurveyDropdownBlock
  | ISurveyFileUploadBlock
  | ISurveyRangeBlock
  | ISurveyDateBlock
  | ISurveyTimeBlock;

export type TypedBlock<T extends BlockTypes> = Extract<Blocks, { type: T }>;

export interface ISurveyBlankBlock extends IBlock {
  type: BlockTypes.BLANK;
}

export interface ISurveyTextBlock extends IBlock {
  type: BlockTypes.TEXT;
  title: string;
}

export interface ISurveyImageBlock extends IBlock {
  type: BlockTypes.IMAGE;
  imageTitle?: string;
  image: string;
  align: BlockAlign;
}

export interface ISurveyVideoBlock extends IBlock {
  type: BlockTypes.VIDEO;
  url: string;
  align: BlockAlign;
}

export interface ISurveyShortTextBlock extends IBlock {
  type: BlockTypes.SHORT_TEXT;
  answer: string;
}

export interface ISurveyLongTextBlock extends IBlock {
  type: BlockTypes.LONG_TEXT;
  answer: string;
}

export interface ISurveySingleSelectBlock extends IBlock {
  type: BlockTypes.SINGLE_SELECT;
  question: string[];
  answer: number | null;
}

export interface ISurveyMultiSelectBlock extends IBlock {
  type: BlockTypes.MULTI_SELECT;
  question: string[];
  answer: number[];
}

export interface ISurveyDropdownBlock extends IBlock {
  type: BlockTypes.DROPDOWN;
  question: string[];
  answer: number | null;
}

export interface ISurveyFileUploadBlock extends IBlock {
  type: BlockTypes.FILE_UPLOAD;
  multiple: boolean;
  answer: Blob[] | string[];
}

export interface ISurveyRangeBlock extends IBlock {
  type: BlockTypes.RANGE;
  min: number;
  max: number;
  answer: number | null;
}

export interface ISurveyDateBlock extends IBlock {
  type: BlockTypes.DATE;
  answer: string;
}

export interface ISurveyTimeBlock extends IBlock {
  type: BlockTypes.TIME;
  answer: string;
}
