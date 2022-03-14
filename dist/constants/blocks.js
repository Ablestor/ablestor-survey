import { v4 as uniqid } from 'uuid';
import { BlockTypes } from '../@types/block';
import { getNameFromBlockType } from '../helpers/converter';
export var blockList = Object.keys(BlockTypes).map(function (value, index) { return ({
    index: index,
    key: uniqid(),
    label: getNameFromBlockType(value.toLowerCase()),
    value: value,
}); });
