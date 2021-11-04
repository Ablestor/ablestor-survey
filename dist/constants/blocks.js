import { v4 as uniqid } from 'uuid';
import { BlockTypes } from '../@types/block';
import { getNameFromBlockType } from '../helpers/converter';
export const blockList = Object.keys(BlockTypes).map((value, index) => ({
    index,
    key: uniqid(),
    label: getNameFromBlockType(value.toLowerCase()),
    value,
}));
