import { Blocks } from './block';

export interface ISurveyEditor {
  submitButtonOptions?: {
    text: string;
    visible: boolean;
  };
  defaultValue?: ISurveyResult;
  onSubmit?: (result: ISurveyResult) => void;
  onChange?: (result: ISurveyResult) => void;
}

export type ISurveyContent = Blocks[];

export interface ISurveyResult {
  title: string;
  description?: string;
  content: ISurveyContent;
}
