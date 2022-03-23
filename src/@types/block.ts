export enum BlockTypes {
  BLANK = 'blank',
  SHORT_TEXT = 'short_text',
  LONG_TEXT = 'long_text',
  SWITCH = 'switch',
  CHECK_BOX = 'check_box',
  SINGLE_SELECT = 'single_select',
  MULTI_SELECT = 'multi_select',
  DROPDOWN = 'dropdown',
  // FILE_UPLOAD = 'file_upload',
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
  id: string;
  type: BlockTypes;
  order: number;
  title?: string;
  description?: string;
  required: boolean;
}

export type Blocks =
  | ISurveyBlankBlock
  | ISurveyShortTextBlock
  | ISurveyLongTextBlock
  | ISurveySwitchBlock
  | ISurveyCheckBoxBlock
  | ISurveySingleSelectBlock
  | ISurveyMultiSelectBlock
  | ISurveyDropdownBlock
  // | ISurveyFileUploadBlock
  | ISurveyRangeBlock
  | ISurveyDateBlock
  | ISurveyTimeBlock;

export type TypedBlock<T extends BlockTypes> = Extract<Blocks, { type: T }>;

export interface SelectableOption {
  key: string;
  label?: string;
  value: string | number;
}

export interface ISurveyBlankBlock extends IBlock {
  type: BlockTypes.BLANK;
}

export interface ISurveyShortTextBlock extends IBlock {
  type: BlockTypes.SHORT_TEXT;
  answer: string;
}

export interface ISurveyLongTextBlock extends IBlock {
  type: BlockTypes.LONG_TEXT;
  answer: string;
}

export interface ISurveySwitchBlock extends IBlock {
  type: BlockTypes.SWITCH;
  switchTitle: string;
  answer: boolean;
}

export interface ISurveyCheckBoxBlock extends IBlock {
  type: BlockTypes.CHECK_BOX;
  checkboxTitle: string;
  answer: boolean;
}

export interface ISurveySingleSelectBlock extends IBlock {
  type: BlockTypes.SINGLE_SELECT;
  question: SelectableOption[];
  answer: string | null;
}

export interface ISurveyMultiSelectBlock extends IBlock {
  type: BlockTypes.MULTI_SELECT;
  question: SelectableOption[];
  answer: string[];
}

export interface ISurveyDropdownBlock extends IBlock {
  type: BlockTypes.DROPDOWN;
  question: SelectableOption[];
  answer: string | null;
}

// export interface ISurveyFileUploadBlock extends IBlock {
//   type: BlockTypes.FILE_UPLOAD;
//   multiple: boolean;
//   answer: string[];
// }

export interface ISurveyRangeBlock extends IBlock {
  type: BlockTypes.RANGE;
  min: number;
  minTitle: string;
  max: number;
  maxTitle: string;
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
