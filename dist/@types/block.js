"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockAlign = exports.BlockTypes = void 0;
var BlockTypes;
(function (BlockTypes) {
    BlockTypes["BLANK"] = "blank";
    BlockTypes["SHORT_TEXT"] = "short_text";
    BlockTypes["LONG_TEXT"] = "long_text";
    BlockTypes["SWITCH"] = "switch";
    BlockTypes["CHECK_BOX"] = "check_box";
    BlockTypes["SINGLE_SELECT"] = "single_select";
    BlockTypes["MULTI_SELECT"] = "multi_select";
    BlockTypes["DROPDOWN"] = "dropdown";
    BlockTypes["FILE_UPLOAD"] = "file_upload";
    BlockTypes["RANGE"] = "range";
    BlockTypes["DATE"] = "date";
    BlockTypes["TIME"] = "time";
})(BlockTypes = exports.BlockTypes || (exports.BlockTypes = {}));
var BlockAlign;
(function (BlockAlign) {
    BlockAlign["LEFT"] = "left";
    BlockAlign["RIGHT"] = "right";
    BlockAlign["CENTER"] = "center";
})(BlockAlign = exports.BlockAlign || (exports.BlockAlign = {}));
