import { ISurveyResult } from './editor';
export interface ISurveyViewer {
    survey: ISurveyResult;
    onSubmit: (data: ISurveyResult) => void;
}
