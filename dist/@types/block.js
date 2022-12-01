export var BlockTypes;
(function (BlockTypes) {
    BlockTypes["BLANK"] = "blank";
    BlockTypes["SHORT_TEXT"] = "short_text";
    BlockTypes["LONG_TEXT"] = "long_text";
    BlockTypes["SWITCH"] = "switch";
    BlockTypes["CHECK_BOX"] = "check_box";
    BlockTypes["SINGLE_SELECT"] = "single_select";
    BlockTypes["MULTI_SELECT"] = "multi_select";
    BlockTypes["DROPDOWN"] = "dropdown";
    // FILE_UPLOAD = 'file_upload',
    BlockTypes["RANGE"] = "range";
    // DATE = 'date',
    // TIME = 'time',
})(BlockTypes || (BlockTypes = {}));
// | 'date'
// | 'time'
export var BlockAlign;
(function (BlockAlign) {
    BlockAlign["LEFT"] = "left";
    BlockAlign["RIGHT"] = "right";
    BlockAlign["CENTER"] = "center";
})(BlockAlign || (BlockAlign = {}));
// export interface ISurveyDateBlock extends IBlock {
//   type: BlockTypes.DATE;
//   answer: string;
// }
// export interface ISurveyTimeBlock extends IBlock {
//   type: BlockTypes.TIME;
//   answer: string;
// }
