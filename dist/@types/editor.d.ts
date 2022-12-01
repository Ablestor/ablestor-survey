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
export declare type AOrBISurveyEditor = ISurveyEditor & {
    whiteList?: BlockType[];
    blackList?: BlockType[];
};
export declare type ISurveyContent = Blocks[];
export interface ISurveyResult {
    questions: ISurveyContent;
    title: string;
    description?: string;
}
