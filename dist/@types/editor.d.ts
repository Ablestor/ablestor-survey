import { Blocks } from './block';
export interface ISurveyEditor {
    submitButtonOptions?: {
        text: string;
        visible: boolean;
    };
    onSubmit?: (result: ISurveyResult) => void;
    onChange?: (result: ISurveyResult) => void;
}
export declare type ISurveyContent = Blocks[];
export interface ISurveyResult {
    title: string;
    description?: string;
    content: ISurveyContent;
}
