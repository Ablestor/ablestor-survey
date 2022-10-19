import { Blocks, BlockType } from './block';

export interface ISurveyEditor {
  submitButtonOptions?: {
    text: string;
    visible: boolean;
  };
  defaultValue?: ISurveyResult;
  onSubmit?: (result: ISurveyResult) => void;
  onChange?: (result: ISurveyResult) => void;
  inputShow?: boolean;
}

export type AOrBISurveyEditor = ISurveyEditor &
  (
    | { whiteList?: BlockType[]; blackList?: undefined }
    | { blackList?: BlockType[]; whiteList?: undefined }
  );

export type ISurveyContent = Blocks[];

export interface ISurveyResult {
  title: string;
  description?: string;
  content: ISurveyContent;
}
