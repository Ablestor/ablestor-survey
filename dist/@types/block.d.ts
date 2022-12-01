export declare enum BlockTypes {
    BLANK = "blank",
    SHORT_TEXT = "short_text",
    LONG_TEXT = "long_text",
    SWITCH = "switch",
    CHECK_BOX = "check_box",
    SINGLE_SELECT = "single_select",
    MULTI_SELECT = "multi_select",
    DROPDOWN = "dropdown",
    RANGE = "range",
    DATE = "date",
    TIME = "time"
}
export declare type BlockType = 'blank' | 'short_text' | 'long_text' | 'switch' | 'check_box' | 'single_select' | 'multi_select' | 'dropdown' | 'range' | 'date' | 'time';
export declare enum BlockAlign {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center"
}
export interface IBlock {
    title?: string;
    description?: string;
    required: boolean;
    type: BlockTypes;
    order: number;
}
export declare type Blocks = ISurveyBlankBlock | ISurveyShortTextBlock | ISurveyLongTextBlock | ISurveySwitchBlock | ISurveyCheckBoxBlock | ISurveySingleSelectBlock | ISurveyMultiSelectBlock | ISurveyDropdownBlock | ISurveyRangeBlock | ISurveyDateBlock | ISurveyTimeBlock;
export declare type TypedBlock<T extends BlockTypes> = Extract<Blocks, {
    type: T;
}>;
export interface ISurveyBlankBlock extends IBlock {
    type: BlockTypes.BLANK;
    format: Record<string, never>;
}
export interface ISurveyShortTextBlock extends IBlock {
    type: BlockTypes.SHORT_TEXT;
    format: {
        regex: string;
        message: string;
    };
}
export interface ISurveyLongTextBlock extends IBlock {
    type: BlockTypes.LONG_TEXT;
    format: {
        regex: string;
        message: string;
    };
}
export interface ISurveySwitchBlock extends IBlock {
    type: BlockTypes.SWITCH;
    format: {
        options: string[];
    };
}
export interface ISurveyCheckBoxBlock extends IBlock {
    type: BlockTypes.CHECK_BOX;
    format: {
        options: string[];
    };
}
export interface ISurveySingleSelectBlock extends IBlock {
    type: BlockTypes.SINGLE_SELECT;
    format: {
        options: string[];
    };
}
export interface ISurveyMultiSelectBlock extends IBlock {
    type: BlockTypes.MULTI_SELECT;
    format: {
        options: string[];
        min?: number;
        max?: number;
    };
}
export interface ISurveyDropdownBlock extends IBlock {
    type: BlockTypes.DROPDOWN;
    format: {
        options: string[];
    };
}
export interface ISurveyRangeBlock extends IBlock {
    type: BlockTypes.RANGE;
    format: {
        options: string[];
        min: number;
        minTitle?: string;
        max: number;
        maxTitle?: string;
    };
}
export interface ISurveyDateBlock extends IBlock {
    type: BlockTypes.DATE;
    format: {
        regex: string;
        message: string;
    };
}
export interface ISurveyTimeBlock extends IBlock {
    type: BlockTypes.TIME;
    format: {
        regex: string;
        message: string;
    };
}
