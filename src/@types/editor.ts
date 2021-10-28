import { Blocks } from './block';

export interface ISurveyEditor {
  onFileUpload?: (file: File) => void;
  onSubmit?: (result: ISurveyResult) => void;
}

export type ISurveyContent = Blocks[];

export interface ISurveyResult {
  title: string;
  description?: string;
  content: ISurveyContent;
}
