import { Blocks } from './block';

export interface ISurveyEditor {
  onSubmit?: (result: ISurveyResult) => void;
}

export type ISurveyContent = Blocks[];

export interface ISurveyResult {
  title: string;
  description?: string;
  content: ISurveyContent;
}
