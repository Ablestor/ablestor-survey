"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockList = void 0;
var uuid_1 = require("uuid");
var block_1 = require("../@types/block");
var converter_1 = require("../helpers/converter");
exports.blockList = Object.keys(block_1.BlockTypes).map(function (value, index) { return ({
    index: index,
    key: (0, uuid_1.v4)(),
    label: (0, converter_1.getNameFromBlockType)(value.toLowerCase()),
    value: value,
}); });
