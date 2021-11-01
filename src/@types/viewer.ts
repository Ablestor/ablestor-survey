import { ISurveyResult } from './editor';

export interface ISurveyViewer {
  survey: ISurveyResult;
  onUpdate: (data: ISurveyResult) => void;
}
