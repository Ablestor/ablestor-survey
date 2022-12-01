import { ISurveyResult } from './editor';
export interface ISurveyViewer {
    survey: ISurveyResult;
    submitButtonOptions?: {
        text: string;
        visible: boolean;
    };
}
